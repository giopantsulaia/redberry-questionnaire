import { createRouter, createWebHistory } from "vue-router";
import StartQuestionnaire from "./pages/StartQuestionnaire.vue";
import IdentifyUser from "./pages/IdentifyUser.vue";
import CovidInfo from "./pages/CovidInfo.vue";
import VaccinationInfo from "./pages/VaccinationInfo.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "start-questionnaire",
    },
    {
      path: "/start-questionnaire",
      component: StartQuestionnaire,
    },
    {
      path: "/identification",
      component: IdentifyUser,
    },
    {
      path: "/covid-info",
      component: CovidInfo,
    },
    {
      path: "/vaccination-info",
      component: VaccinationInfo,
    },
  ],
});
export default router;
