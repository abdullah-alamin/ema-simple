import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { userContext } from '../../App';
function Shipment() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    const [loggedUser, setLoggedUser]= useContext(userContext);
  console.log(loggedUser);
    return (
      <form style={{textAlign: 'center'}} onSubmit={handleSubmit(onSubmit)}>
        <input name="name" defaultValue={loggedUser.displayName} ref={register({ required: true })} />
        {errors.name && <span style={{color: 'red'}}>Name is required</span>}
        <br/>
        <input name="email" defaultValue={loggedUser.email} ref={register({ required: true })} />
        {errors.email && <span style={{color: 'red'}}>Email is required</span>}
        <br/>
        <input name="address" ref={register({ required: true })} />
        {errors.address && <span style={{color: 'red'}}>Address is required</span>}
        <br/>
        <input name="mobile" ref={register({ required: true })} />
        {errors.mobile && <span style={{color: 'red'}}>Mobile is required</span>}
        <br/>
        <input type="submit" />
      </form>
    );
}

export default Shipment
