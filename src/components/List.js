import React from 'react'
import data from '../data.js';
import {useState} from 'react';

const List = () => {
    const [people, setPeople] = useState(data);

    const removeItem = (id) => {
        let newPeople = people.filter(value => value.id !== id); 
        setPeople(newPeople); 
    }

    const deleteAll = () => {
        setPeople([])
    }

    const reload = () => {
        setPeople(data)
    }
    


    return (
        <>
            <ul className="container bg-dark list_container rounded shadow mt-5">
                {people.map(el => {
                    const {id, nome, stato, img} = el;
                        return (
                                <li className="row list_border p-3" key={id}>
                                    <div className="col-2 d-flex align-items-center p-0">
                                        <img src={img} alt="" className="img_list rounded-pill p-0 shadow"></img>
                                    </div>
                                    <div className="col-9 d-flex flex-column justify-content-center">
                                        <p className="fw-bold m-0">{nome}</p>
                                        <p className="small font-italic">{stato}</p>
                                    </div>
                                    <div className="col-1 d-flex align-items-center">
                                        <button className="btn button bg-danger ps-2 pe-2 pt-0 pb-1" onClick={() => removeItem(id)} type="button"><span className="small fw-bold">x</span></button>
                                    </div>                                
                                </li>
                        )
                    })
                }
            </ul>
            <div className="container list_container my-3">
            <div className="row">
                    <div className="col-12 d-flex justify-content-between p-0">
                        <button className="btn button text-uppercase bg-primary rounded-pill font_small px-4 fw-bold text-white" onClick={reload}>
                            reload
                        </button>
                        <button className="btn button text-uppercase btn-outline-danger rounded-pill font_small px-4 fw-bold" onClick={deleteAll}>delete all</button>
                    </div>
                </div>
            </div>


        </>
    )

    
    }


export default List