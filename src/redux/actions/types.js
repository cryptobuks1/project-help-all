const types = {
  //authentication
  START_PATRON_VERIFICATION : 'START_PATRON_VERIFICATION',
  FINISH_PATRON_VERIFICATION : 'FINISH_PATRON_VERIFICATION',
  REJECT_PATRON_VERIFICATION : 'REJECT_PATRON_VERIFICATION',
  FINISH_CRED_MODIFICATION : 'FINISH_CRED_MODIFICATION',
  LOGIN_PATRON: 'LOGIN_PATRON',
  LOGOUT_PATRON : 'LOGOUT_PATRON',
  //loading data
  START_LOADING_DATA: 'START_LOADING_DATA',
  FINISH_LOADING_DATA: 'FINISH_LOADING_DATA',
  ERROR_LOADING_DATA: 'ERROR_LOADING_DATA',
  UPDATE_LISTING_DATA: 'UPDATE_LISTING_DATA',

  //Settings
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE'
};

export default types;
