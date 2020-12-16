/* eslint-disable import/prefer-default-export */
import {
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_LIST_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
} from '../constants';

export const userLoginReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        isLoading: true,
      };
    case USER_LOGIN_SUCCESS:
      console.log('success', payload);
      return {
        isLoading: false,
        userInfo: payload,
      };
    case USER_LOGIN_FAIL:
      return {
        isLoading: false,
        error: payload,
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case USER_REGISTER_REQUEST:
      return {
        isLoading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        isLoading: false,
        userInfo: payload,
      };
    case USER_REGISTER_FAIL:
      return {
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, { type, payload }) => {
  switch (type) {
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case USER_DETAILS_SUCCESS:
      return {
        isLoading: false,
        user: payload,
      };
    case USER_DETAILS_FAIL:
      return {
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const updateUserProfileReducer = (state = { }, { type, payload }) => {
  switch (type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case USER_UPDATE_PROFILE_SUCCESS:
      return {
        isLoading: false,
        success: true,
        userInfo: payload,
      };
    case USER_UPDATE_PROFILE_FAIL:
      return {
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const userListReducer = (state = { users: [] }, { type, payload }) => {
  switch (type) {
    case USER_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LIST_SUCCESS:
      return {
        isLoading: false,
        success: true,
        users: payload,
      };
    case USER_LIST_FAIL:
      return {
        isLoading: false,
        error: payload,
      };
    case USER_LIST_RESET:
      return { users: [] };
    default:
      return state;
  }
};

export const userDeleteReducer = (state = { }, { type, payload }) => {
  switch (type) {
    case USER_DELETE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case USER_DELETE_SUCCESS:
      return {
        isLoading: false,
        success: true,
      };
    case USER_DELETE_FAIL: return {
      isLoading: false,
      error: payload,
    };
    default:
      return state;
  }
};