import axios from "axios";

export default axios.create({
    baseURL: "https://8080-adaebadfaafeacdeacafbadecbcafddeada.project.examly.io",
    headers: {
        "Content-type": "application/json"
    }
});
