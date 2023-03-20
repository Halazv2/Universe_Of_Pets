import React, {useEffect} from 'react';
import TaskDetailHeader from './TaskDetailHeader';
import TaskDetailBody from './TaskDetailBody';
import {useDispatch, useSelector} from 'react-redux';
import {onGetSelectedTask} from '../../../../redux/actions';
import AppsHeader from '@crema/core/AppsContainer/AppsHeader';
import AppsContent from '@crema/core/AppsContainer/AppsContent';
import {MailDetailSkeleton} from '@crema/core/AppSkeleton/MailDetailSkeleton';
import {AppState} from '../../../../redux/store';
import {TodoObj} from 'types/models/apps/Todo';
import {useRouter} from 'next/router';

const TaskDetail = () => {
  const dispatch = useDispatch();

  const {query} = useRouter();
  let id = '';
  if (query!.all) {
    id = query!.all![query!.all!.length - 1];
  }

  useEffect(() => {
    dispatch(onGetSelectedTask(+id as number));
  }, [dispatch, id]);

  const {selectedTask}: {selectedTask: TodoObj} = useSelector<
    AppState,
    AppState['todoApp']
  >(({todoApp}) => todoApp);

  if (!selectedTask) {
    return <MailDetailSkeleton />;
  }
  return (
    <>
      <AppsHeader>
        <TaskDetailHeader selectedTask={selectedTask} />
      </AppsHeader>
      <AppsContent isDetailView>
        <TaskDetailBody selectedTask={selectedTask} />
      </AppsContent>
    </>
  );
};

export default TaskDetail;
