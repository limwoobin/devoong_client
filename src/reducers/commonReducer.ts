import { 
    GET_RECENT_POST,
    GET_RECENT_NOTICE,
    CommonAction 
} from '../actions/commonAction';
import { RecentDataModel } from '../core/models/RecentDataModel';
import { API } from '../api/callAA'; 

type CommonState = {
    recentNotice : RecentDataModel[];
    recentPost : RecentDataModel[];
};
  
const initialState: CommonState = {
    recentNotice: [],
    recentPost: [],
};

export default function commonReducer(state: CommonState = initialState, action: CommonAction) {
    switch (action.type) {
        case GET_RECENT_POST:
          return { 
              recentPost: API.Get_RecentPosts()
          };
        case GET_RECENT_NOTICE:
          return { 
              recentNotice: API.Get_RecentNotice() 
          };
        default:
          return state;
      }
}