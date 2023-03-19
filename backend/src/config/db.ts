import mongoose, {Collection, ConnectOptions} from "mongoose";

interface IOnConnectedCallback {
  (mongoUrl: string): void;
}

interface SafeMongooseConnectionOptions {
  mongoUrl: string;
  mongooseConnectOptions?: ConnectOptions;
  retryDelayMs?: number;
  debugCallback?: (CollectionName: string, method: string, query: any, doc: any) => void;
  onStartConnection?: (mongoUrl: string) => void;
  onConnectionError?: (error: Error, mongoUrl: string) => void;
  onConnectionRetry?: (mongoUrl: string) => void;
}

const defaultMongooseConnectionOptions: ConnectOptions = {
  autoCreate: true,
  autoIndex: true,
};

export default class SafeMongooseConnection {
  public readonly options: SafeMongooseConnectionOptions;
  public onConnectedCallback?: IOnConnectedCallback;
  public isConnectedBefore: boolean = false;

  public shouldCloseConnection: boolean = false;
  public retryDelayMs: number = 2000;
  public readonly mongoConnectionOptions: ConnectOptions = defaultMongooseConnectionOptions;

  public connectionTimeout?: NodeJS.Timeout;

  constructor(options: SafeMongooseConnectionOptions) {
    this.options = options;
    mongoose.connection.on("error", this.onError);
    mongoose.connection.on("connected", this.onConnected);
    mongoose.connection.on("disconnected", this.onDisconnected);
    mongoose.connection.on("reconnected", this.onReconnected);

    if (options.debugCallback) {
      mongoose.set("debug", options.debugCallback);
    }
    if (options.retryDelayMs) {
      this.retryDelayMs = options.retryDelayMs;
    }
  }

  public close(onClosed: (err: any) => void = () => {}, force: boolean = false) {
    if (this.connectionTimeout) {
      clearTimeout(this.connectionTimeout);
    }
    this.shouldCloseConnection = true;
    mongoose.connection.close(force, onClosed);
  }

  public connect(onConnectedCallback: IOnConnectedCallback) {
    this.onConnectedCallback = onConnectedCallback;
    this.startConnection();
  }

  public startConnection = () => {
    if (this.options.onStartConnection) {
      this.options.onStartConnection(this.options.mongoUrl);
    }
    mongoose.connect(this.options.mongoUrl, this.mongoConnectionOptions).catch(() => {});
  };

  public onConnected = () => {
    this.isConnectedBefore = true;
    this.onConnectedCallback?.(this.options.mongoUrl);
  };

  public onReconnected = () => {
    this.onConnectedCallback?.(this.options.mongoUrl);
  };

  public onError = () => {
    if (this.options.onConnectionError) {
      const error = new Error(`Could not connect to MongoDB at ${this.options.mongoUrl}`);
      this.options.onConnectionError(error, this.options.mongoUrl);
    }
  };

  public onDisconnected = () => {
    if (!this.isConnectedBefore && !this.shouldCloseConnection) {
      this.connectionTimeout = setTimeout(() => {
        this.startConnection();
        this.connectionTimeout && clearTimeout(this.connectionTimeout);
      }, this.retryDelayMs);
      if (this.options.onConnectionRetry) {
        this.options.onConnectionRetry(this.options.mongoUrl);
      }
    }
  };
}
