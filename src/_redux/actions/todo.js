import { getSectionsDB, addSection } from '../../_config/firebase';
import actionType from '../constants/';

export const loadSections = () => (dispatch) => {
  dispatch({
    type: actionType.LOAD_SECTIONS_REQUEST,
  });
  getSectionsDB()
    .then((sections) => {
      dispatch({
        type: actionType.LOAD_SECTIONS_SUCCESS,
        payload: sections.val(),
      });
    })
    .catch((error) => {
      dispatch({
        type: actionType.LOAD_SECTIONS_FAILED,
        payload: error,
      });
    });
};

export const createSection = name => (dispatch) => {
  dispatch({ type: actionType.ADD_SECTION_REQUEST });

  addSection(name)
    .then((res) => {
      loadSections()(dispatch); // refresh the data to keep up-to-date
      dispatch({
        type: actionType.ADD_SECTION_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionType.ADD_SECTION_FAILED,
        payload: error,
      });
    });
};
