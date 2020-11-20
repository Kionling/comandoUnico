import API from "./API";
import {
  GET_USERS,
  GET_GRUPO,
  GET_ARTISTAS,
  GET_PERFORMANCES,
} from "./actions";
import { createPool } from "mysql";

function refreshUserInformation() {
  API.getUserInformation()
    .then((response) => {
      dispatchEvent({
        type: GET_USERS,
        users: response.data.name,
        userId: response.data.id,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatchEvent({ type: GET_USERS, users: "", userId: null });
    });

  API.getGrupoInfo()
    .then((response) => {
      dispatch({
        type: GET_PERFORMANCES,
        grupo: response.data.name,
        inviteCode: response.data.invite_code,
      });
      dispatch({
        type: GET_ARTISTAS,
        artistas: response.data.artistas,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_GRUPO,
        grupo: null,
        inviteCode: null,
      });
    });
  dispatch({
    type: GET_ARTISTAS,
    artistas: [],
  }).catch((err) => {
    console.log(err);
  });

  API.getGrupoPerformances()
    .then((res) => {
      dispatch({
        type: GET_PERFORMANCES,
        performances: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_PERFORMANCES,
        performances: [],
      });
    });
}

export refreshUserInformation