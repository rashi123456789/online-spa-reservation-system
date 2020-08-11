import axios from '../config/axios'
import swal from 'sweetalert'
export const setUser=(user)=>{
    return {type:'SET_USER',payload:user }
}

export const startLoginUser=(loginData,redirect)=>{
    return (dispatch)=>{
        axios.post('/users/login',loginData)
        .then((response)=>{
            if(response.data.hasOwnProperty('error'))
            {
                swal({
                    icon:'info',
                    title:'Validation faled',
                    text: `${response.data.error}`,
                  });
            }
            else
            {
                swal({
                    title: "Welcome",
                    text: "login successfully",
                    icon: "success",
                });
                localStorage.setItem('authToken',response.data.token)
                axios.get('/users/accounts',{headers:{'authorization':localStorage.getItem('authToken')}})
                .then((response)=>{
                    const user=response.data
                    dispatch(setUser(user))
                })
                redirect()
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
} 

export const startGetUser=()=>{
    return (dispatch)=>{
       axios.get('/users/accounts',{headers:{'authorization':localStorage.getItem('authToken')}})
       .then((response=>{
           const user=response.data
           dispatch(setUser(user))
       })) 
       .catch((err)=>{
           alert(err)
       })
    }
}

export const startRegisterUser=(formData,redirect)=>{
    return (dispatch)=>{
        axios.post('/users/register',formData)
        .then(response=>{
            if(response.data.hasOwnProperty('errors'))
            {
                swal({
                    icon:'info',
                    title:'Validation faled',
                    text: `${response.data.error}`,
                  });
            } 
            else
            {
                swal({
                    title: "Thank you for Registering",
                    text: "Registered successfully",
                    icon: "success",
                });
                redirect()
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const startUserLogout=()=>{
    return (dispatch)=>{
        localStorage.removeItem('authToken')
        dispatch(setUser({}))
        window.location.href='/'
    }
    
}