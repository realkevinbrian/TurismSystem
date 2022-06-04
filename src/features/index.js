import {configureStore} from "@reduxjs/toolkit";
import MenuSlice from "./MenuSlice";
import QuerySlice from "./QuerySlice";
import CategorySlice from "./CategorySlice";
import AgendaSlice from "./AgendaSlice"
import FinanceSlice from "./FinanceSlice"
import ApprovedSlice from "./ApprovedSlice"
import LoginSlice from "./LoginSlice";
import UsersReportSlice from "./UsersReportSlice";
import GuideReportSlice from "./GuideReportSlice";
import ShopsReportSlice from "./ShopsReportSlice";
import PlansReportSlice from "./PlansReportSlice";

/***
 * Setup store
 */

const store = configureStore({
    reducer : {
        menu : MenuSlice,
        query : QuerySlice,
        category : CategorySlice,
        agenda : AgendaSlice,
        finance : FinanceSlice,
        approved : ApprovedSlice,
        login : LoginSlice,
        usersReport : UsersReportSlice,
        guideReport : GuideReportSlice,
        shopsReport : ShopsReportSlice,
        plansReport : PlansReportSlice
    }

})

export default store;