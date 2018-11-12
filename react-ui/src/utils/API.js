import Axios from "axios";

export default {
    test() {
        return Axios.get('api/')
    }
}