import React from 'react'

export const Customers = (props) => {
    return (
        <div className="card-body page-center">
            <h2 className="mb-3" style={{fontSize:'24px',fontWeight:'bold'}}>Customers List : </h2>
            { props.customers.length === 0 ? "No Customer Data Found" :
                props.customers.map((customer) =>  {
                    return(
                        <span key={customer.cid}>
                            <h4 style={{textTransform:'capitalize'}}>{customer.firstName} {customer.lastName}</h4>
                            <p>{customer.address}</p>
                            <button className="btn btn-sm btn-danger my-2"  onClick={() => {props.onDelete(customer)}}>Delete</button> 
                        </span>
                    )
                }) 
            }    
            {/* <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form> */}
        </div>
    )
}
