import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {onGetMemberList, onGetScrumLabelList} from '../../../redux/actions';
import BoardDetail from './BoardDetail';
import BoardList from './BoardList';
import {useRouter} from 'next/router';

const ScrumBoard = () => {
  const dispatch = useDispatch();
  const {query} = useRouter();
  let id = '';
  if (query!.all) {
    id = query!.all![query!.all!.length - 1];
  }

  useEffect(() => {
    dispatch(onGetScrumLabelList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetMemberList());
  }, [dispatch]);

  const onGetMainComponent = () => {
    if (+id > 0) {
      return <BoardDetail />;
    } else {
      return <BoardList />;
    }
  };

  return <>{onGetMainComponent()}</>;
};

export default ScrumBoard;
