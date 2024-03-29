const WORKFLOW = {
  COMBO_ITEMS: {
    REQUEST: 'WORKFLOW_COMBO_ITEMS_REQUEST',
    RECEIVED: 'WORKFLOW_COMBO_ITEMS_RECEIVED',
    FAILED: 'WORKFLOW_COMBO_ITEMS_FAILED',
  },
  UPDATE: {
    INIT: 'WORKFLOW_UPDATE_INIT',
    INIT_SUCCESS: 'WORKFLOW_UPDATE_INIT_SUCCESS',
    PATCH_FIELD: 'WORKFLOW_UPDATE_PATCH_FIELD',
    SAVE: 'WORKFLOW_UPDATE_SAVE',
    ADD_ATTACHMENT: 'WORKFLOW_UPDATE_ADD_ATTACHMENT',
    REMOVE_ATTACHMENT: 'WORKFLOW_UPDATE_REMOVE_ATTACHMENT',
    ADD_ATTACHMENT_SUCCESS: 'WORKFLOW_UPDATE_ADD_ATTACHMENT_SUCCESS',
    ADD_ATTACHMENT_FAILED: 'WORKFLOW_UPDATE_ADD_ATTACHMENT_FAILED',
    SAVE_SUCCESS: 'WORKFLOW_UPDATE_SAVE_SUCCESS',
    SAVE_FAILED: 'WORKFLOW_UPDATE_SAVE_FAILED',
    CLEAR_MSG: 'WORKFLOW_UPDATE_CLEAR_MSG',
    CLEAN: 'WORKFLOW_UPDATE_CLEAN'
  }
}

const CONTEXT = {
  GET_TOKEN: 'WORKREQUEST_GET_TOKEN_SUCCESS'
}

const WORK_REQUEST_V2 = {
  FILTER_OPTIONS: {
    INIT: 'WORK_REQUEST_V2_FILTER_OPTIONS_INIT',
    INIT_SUCCESS: 'WORK_REQUEST_V2_FILTER_OPTIONS_INIT_SUCCESS',
    // UPDATE_SELECTED: 'WORK_REQUEST_V2_FILTER_OPTIONS_UPDATE_SELECTED',
  },
  LIST: {
    INIT: 'WORK_REQUEST_V2_LIST_INIT',
    REQUEST: 'WORK_REQUEST_V2_LIST_REQUEST',
    CLEAR: 'WORK_REQUEST_V2_LIST_CLEAR',
    SET_FILTER: 'WORK_REQUEST_V2_SET_FILTER',
    COUNT_RECEIVED: 'WORK_REQUEST_V2_COUNT_RECEIVED',
    REQUEST_COUNT: 'WORK_REQUEST_V2_COUNT_REQUEST',
    RECEIVED_COUNT: 'WORK_REQUEST_V2_COUNT_RECEIVED',
    RECEIVED: 'WORK_REQUEST_V2_LIST_RECEIVED',
    UPDATE_TASK_STATUS: 'WORK_REQUEST_V2_LIST_UPDATE_TASK_STATUS',
    REQUEST_FAILED: 'WORK_REQUEST_V2_LIST_REQUEST_FAILED',
    REQUEST_NEXT_PAGE: 'WORK_REQUEST_V2_LIST_REQUEST_NEXT_PAGE',
    REFRESH: 'WORK_REQUEST_V2_LIST_REFRESH',
    REQUEST_ACTIONS: 'WORK_REQUEST_V2_LIST_REQUEST_ACTIONS',
    RECEIVED_ACTIONS: 'WORK_REQUEST_V2_LIST_RECEIVED_ACTIONS',
    TRIGGER_ACTION: 'WORK_REQUEST_V2_LIST_TRIGGER_ACTION',
    TOGGLE_ITEM_SELECTION: 'WORK_REQUEST_V2_TOGGLE_ITEM_SELECTION'
  },
  TIMELINE: {
    REQUEST: 'WORK_REQUEST_V2_TIMELINE_REQUEST',
    REQUEST_FAILED: 'WORK_REQUEST_V2_TIMELINE_REQUEST_FAILED',
    RECEIVED: 'WORK_REQUEST_V2_TIMELINE_RECEIVED',
  },
  DASHBOARD: {
    INIT: 'WORK_REQUEST_V2_DASHBOARD_INIT',
    CHANGE_FILTER: 'WORK_REQUEST_V2_DASHBOARD_CHANGE_FILTER',
    FILTER_SELECT: 'WORK_REQUEST_V2_DASHBOARD_FILTER_SELECT',
    REQUEST_FAILED: 'WORK_REQUEST_V2_DASHBOARD_REQUEST_FAILED',
    RECEIVED: 'WORK_REQUEST_V2_DASHBOARD_RECEIVED',
    RECEIVED_COUNT: 'WORK_REQUEST_V2_DASHBOARD_RECEIVED_COUNT',
  },
  RESOURCE: {
    REQUEST: 'WORK_REQUEST_V2_RESOURCE_REQUEST',
    REQUEST_FAILED: 'WORK_REQUEST_V2_RESOURCE_REQUEST_FAILED',
    REQUEST_ACTION: 'WORK_REQUEST_V2_RESOURCE_REQUEST_ACTION',
    RECEIVED_ACTION: 'WORK_REQUEST_V2_RESOURCE_RECEIVED_ACTION',
    TRIGGER_ACTION: 'WORK_REQUEST_V2_RESOURCE_TRIGGER_ACTION',
    TRIGGER_ACTION_FAILED: 'WORK_REQUEST_V2_RESOURCE_TRIGGER_ACTION_FAILED',
    CLEAR_MESSAGE: 'WORK_REQUEST_V2_RESOURCE_CLEAR_MESSAGE',
    RECEIVED: 'WORK_REQUEST_V2_RESOURCE_RECEIVED',
    RECEIVED_COUNT: 'WORK_REQUEST_V2_RESOURCE_RECEIVED_COUNT',
    WORK_ORDER:{
      REQUEST: 'WORK_REQUEST_V2_RESOURCE_WORK_ORDER_REQUEST',
      REQUEST_FAILED: 'WORK_REQUEST_V2_RESOURCE_WORK_ORDER_REQUEST_FAILED',
      RECEIVED: 'WORK_REQUEST_V2_RESOURCE_WORK_ORDER_RECEIVED',
      ASSIGN: 'WORK_REQUEST_V2_RESOURCE_WORK_ORDER_ASSIGN',
      ASSIGN_FAIL: 'WORK_REQUEST_V2_RESOURCE_WORK_ORDER_ASSIGN_FAIL',
    }
  },
  COUNT: {
    REQUEST: 'WORK_REQUEST_V2_COUNT_REQUEST',
    RECEIVED: 'WORK_REQUEST_V2_COUNT_RECEIVED',
    REQUEST_FAILED: 'WORK_REQUEST_V2_COUNT_REQUEST_FAILED',
  }
}
const WORKREQUEST = {
  COMBO_ITEMS: {
    RECEIVED: 'WORKREQUEST_COMBO_ITEMS_RECEIVED',
    FAILED: 'WORKREQUEST_COMBO_ITEMS_FAILED',
  },
  GET_COUNT_SUCCESS: 'WORKREQUEST_GET_COUNT_SUCCESS',
  GET_LIST_SUCCESS: 'WORKREQUEST_GET_LIST_SUCCESS',
  FILTER: 'WORKREQUEST_FILTER',
  REFRESH: 'WORKREQUEST_PAGEREFRESH',
  GET_LISTACTION_SUCCESS: 'WORKREQUEST_GET_LISTACTION_SUCCESS',
  SINGLE_WRSELECTION: 'WORKREQUEST_SINGLE_WRSELECTION_SUCCESS',
  MULTI_WRSELECTION: 'WORKREQUEST_MULTI_WRSELECTION_SUCCESS',
  GET_OVERVIEW_SUCCESS: 'WORKREQUEST_GET_OVERVIEW_SUCCESS',
  GET_OVERVIEWCARD_SUCCESS: 'WORKREQUEST_GET_OVERVIEWCARD_SUCCESS',
  GET_OVERVIEWCARD_IMG_SUCCESS: 'WORKREQUEST_GET_OVERVIEWCARD_IMG_SUCCESS',
  GET_TIMELINE_SUCCESS: 'WORKREQUEST_GET_TIMELINE_SUCCESS',
  GET_WRWO_SUCCESS: 'WORKREQUEST_GET_WO_SUCCESS'
}

const WORK_ORDER = {
  COMBO_ITEMS: {
    REQUEST: 'WORK_ORDER_COMBO_ITEMS_REQUEST',
    RECEIVED: 'WORK_ORDER_COMBO_ITEMS_RECEIVED',
    FAILED: 'WORK_ORDER_COMBO_ITEMS_FAILED',
  },
  UPDATE: {
    INIT: 'WORK_ORDER_UPDATE_INIT',
    INIT_SUCCESS: 'WORK_ORDER_UPDATE_INIT_SUCCESS',
    PATCH_FIELD: 'WORK_ORDER_UPDATE_PATCH_FIELD',
    SAVE: 'WORK_ORDER_UPDATE_SAVE',
    ADD_ATTACHMENT: 'WORK_ORDER_UPDATE_ADD_ATTACHMENT',
    REMOVE_ATTACHMENT: 'WORK_ORDER_UPDATE_REMOVE_ATTACHMENT',
    ADD_ATTACHMENT_SUCCESS: 'WORK_ORDER_UPDATE_ADD_ATTACHMENT_SUCCESS',
    ADD_ATTACHMENT_FAILED: 'WORK_ORDER_UPDATE_ADD_ATTACHMENT_FAILED',
    SAVE_SUCCESS: 'WORK_ORDER_UPDATE_SAVE_SUCCESS',
    SAVE_FAILED: 'WORK_ORDER_UPDATE_SAVE_FAILED',
    CLEAR_MSG: 'WORK_ORDER_UPDATE_CLEAR_MSG',
    CLEAN: 'WORK_ORDER_UPDATE_CLEAN',
    PARENT_LIST_ITEM: {
      REQUEST: 'WORK_ORDER_PARENT_LIST_ITEM_REQUEST',
      RECEIVED: 'WORK_ORDER_PARENT_LIST_ITEM_RECEIVED'
    },
  }
}

const EQUIPMENT_LOCATIONS = {
  REQUEST: 'EQUIPMENT_LOCATIONS_REQUEST',
  RECEIVED: 'EQUIPMENT_LOCATIONS_RECEIVED',
  FAILED: 'EQUIPMENT_LOCATIONS_FAILED',
  MAP_LOCATIONS: {
    REQUEST: 'EQUIPMENT_MAP_LOCATIONS_REQUEST',
    RECEIVED: 'EQUIPMENT_MAP_LOCATIONS_RECEIVED',
  },
  GROUP_EQP_AND_LOC: {
    REQUEST: 'EQUIPMENT_LOCATIONS_GROUP_REQUEST',
    RECEIVED: 'EQUIPMENT_LOCATIONS_GROUP_RECEIVED',
  },
  PLANNING_GROUP: {
    REQUEST: 'EQUIPMENT_LOCATIONS_PLANNING_GROUP_REQUESTED',
    RECEIVED: 'EQUIPMENT_LOCATIONS_PLANNING_GROUP_RECEIVED',
  },
}
const ASSETS = {
  REQUEST: 'ASSETS_REQUEST',
  RECEIVED: 'ASSETS_RECEIVED',
}


const types = {
  CLEAR_STORE: 'CLEAR_STORE',
  APP_DELETE_DATA: 'APP_DELETE_DATA',
  USER_LOGOUT: 'USER_LOGOUT',
  WORKFLOW,
  CONTEXT,
  WORKREQUEST,
  WORK_REQUEST_V2,
  ASSETS,
  EQUIPMENT_LOCATIONS,
  WORK_ORDER,
};
export default types;
