import { createRouter, createWebHistory } from "vue-router";
import StartQuestionnaire from "@/pages/StartQuestionnaire.vue";
import IdentifyUser from "@/pages/IdentifyUser.vue";
import CovidInfo from "@/pages/CovidInfo.vue";
import VaccinationInfo from "@/pages/VaccinationInfo.vue";
import CovidPolicy from "@/pages/CovidPolicy.vue";
import ThankYou from "@/pages/ThankYou.vue";
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
      name: "StartQuestionnaire",
    },
    {
      path: "/identification",
      component: IdentifyUser,
      name: "Identification",
    },
    {
      path: "/covid-info",
      component: CovidInfo,
      name: "CovidInfo",
    },
    {
      path: "/vaccination-info",
      component: VaccinationInfo,
      name: "VaccinationInfo",
    },
    {
      path: "/covid-policy",
      component: CovidPolicy,
      name: "CovidPolicy",
    },
    {
      path: "/thank-you",
      component: ThankYou,
      name: "ThankYou",
    },
  ],
});
export default router;
