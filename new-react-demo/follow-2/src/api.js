/**
 * Created by pegdwende on 7/13/2018.
 */
import axios from 'axios';
export default {
    user: {
        login: (credentials) => axios.post('/api/auth',
            {credentials}
        ).then(
            res => res.data.user
        )
    }
}