import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    covidDatas: [],
    topNews: [
      {
        uuid: "6b201c53-408a-4dc0-83c3-34664e95d63c",
        title: "HK unveils budget for virus-plagued economy",
        description:
          "Allocation will cover tax breaks, electronic spending vouchers for 6.6 million people.",
        keywords: "Hong-Kong|budget|COVID-19|virus|Plague|economy|pandemic",
        snippet:
          "Share this article Whatsapp\n\nFacebook\n\nTwitter\n\nLinkedin Su Xinqi and Jerome Taylor (Agence France-Presse) (The Jakarta Post) Hong Kong, China ● Thu, February...",
        url: "https://www.thejakartapost.com/paper/2022/02/23/hk-unveils-budget-for-virus-plagued-economy.html",
        image_url: "https://www.thejakartapost.com/favicon.ico",
        language: "en",
        published_at: "2022-02-23T18:37:11.000000Z",
        source: "news.google.com",
        categories: ["general"],
        relevance_score: null,
        locale: "id",
      },
      {
        uuid: "8f2b6e37-7f8e-4637-bbbc-620957276f5b",
        title: "Testing legitimacy of reserve component",
        description:
          "Understanding hybrid threats as an entry point for hybrid warfare is a strategic precaution.",
        keywords:
          "reserve-component|judicial-review|Constitutional-Court|defense-ministry|house-of-representatives|defense|TNI|resource|threat|hybrids",
        snippet:
          "Share this article Whatsapp\n\nFacebook\n\nTwitter\n\nLinkedin D. Nicky Fahrizal (The Jakarta Post) Jakarta ● Thu, February 24, 2022\n\nThe constitutionality test of ...",
        url: "https://www.thejakartapost.com/opinion/2022/02/23/testing-legitimacy-of-reserve-component.html",
        image_url:
          "https://img.jakpost.net/c/2021/10/13/2021_10_13_118402_1634097087._large.jpg",
        language: "en",
        published_at: "2022-02-23T18:33:53.000000Z",
        source: "news.google.com",
        categories: ["general"],
        relevance_score: null,
        locale: "id",
      },
      {
        uuid: "42f32cf4-fafd-4b77-b789-a7ef5453133e",
        title: "South Korea to help Indonesia realize its EV production dream",
        description:
          "President Joko Jokowi Widodo swore in businessman Gandi Sulistiyanto as Indonesian ambassador to South Korea late last year. In a recent online conversation wit...",
        keywords:
          "Indonesia|South-Korea|relationship|investment|market|EV|battery|body|parts|supply-chain|Southeast-Asia|bureaucracy|export|semiconductor|Hyundai",
        snippet:
          "Share this article Whatsapp\n\nFacebook\n\nTwitter\n\nLinkedin Kornelius Purba (The Jakarta Post) Jakarta ● Thu, February 24, 2022\n\nQuestion: is there any specific ...",
        url: "https://www.thejakartapost.com/opinion/2022/02/23/south-korea-to-help-indonesia-realize-its-ev-production-dream.html",
        image_url:
          "https://img.jakpost.net/c/2022/02/23/2022_02_23_122851_1645591126._large.jpg",
        language: "en",
        published_at: "2022-02-23T18:33:53.000000Z",
        source: "news.google.com",
        categories: ["general"],
        relevance_score: null,
        locale: "id",
      },
      {
        uuid: "b73ffa92-be22-46bb-8a23-e4c39e2c7ebd",
        title: "Protecting the Strait of Malacca: Too little too late?",
        description:
          "According to the Marine Department of Malaysia, the Strait of Malacca is traversed by more than 70, 000 vessels each year.",
        keywords:
          "Malacca|strait|vessel|security|Singapore|AUKUS|Nuclear|submarine|accident|UNCLOS|Indonesia",
        snippet:
          "Share this article Whatsapp\n\nFacebook\n\nTwitter\n\nLinkedin Mohd Hazmi Mohd Rusli (The Jakarta Post) Canberra ● Thu, February 24, 2022\n\nSoutheast Asia is home to...",
        url: "https://www.thejakartapost.com/opinion/2022/02/23/protecting-the-strait-of-malacca-too-little-too-late.html",
        image_url:
          "https://img.jakpost.net/c/2022/02/23/2022_02_23_122853_1645593924._large.jpg",
        language: "en",
        published_at: "2022-02-23T18:24:19.000000Z",
        source: "news.google.com",
        categories: ["general"],
        relevance_score: null,
        locale: "id",
      },
      {
        uuid: "3bf4e269-7675-4133-9ba4-a091f8d5b3de",
        title: "Solidarity vs. protection",
        description:
          "The plan to implement uniform basic services for all insurance holders has raised concerns that JKN will trap people in low-quality, inadequate healthcare servi...",
        keywords:
          "BPJS|universal-healthcare|deficit|COVID-19|uniform|service|poor-people|subsidy|bill|hospital",
        snippet:
          "Share this article Whatsapp\n\nFacebook\n\nTwitter\n\nLinkedin Editorial board (The Jakarta Post) Jakarta ● Thu, February 24, 2022 01:21 0 0c06e8ca436d6e21bba3a7085...",
        url: "https://www.thejakartapost.com/opinion/2022/02/23/solidarity-vs-protection.html",
        image_url:
          "https://img.jakpost.net/c/2020/08/13/2020_08_13_102314_1597332495._large.jpg",
        language: "en",
        published_at: "2022-02-23T18:24:19.000000Z",
        source: "news.google.com",
        categories: ["general"],
        relevance_score: null,
        locale: "id",
      },
    ],
    wheathers: []
  },
  getters: {},
  mutations: {
    SET_COVID_DATAS(state, payload) {
      state.covidDatas = payload;
    },
    SET_TOP_NEWS(state, payload) {
      state.topNews = payload;
    },
    SET_WEATHERS(state, payload) {
      state.wheathers = payload;
    },
  },
  actions: {
    async getCovidData(context) {
      try {
        const { data } = await axios.get("http://localhost:3000/covidDatas");

        context.commit("SET_COVID_DATAS", data);
      } catch (error) {
        console.log(error);
      }
    },
    async getNews(context) {
      try {
        const { data } = await axios.get("http://localhost:3000/covidDatas");

        context.commit("SET_TOP_NEWS", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
