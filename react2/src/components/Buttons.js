import React, { useState } from 'react'

function Buttons() {
    
    const [like, setLike] = useState(0);
    const [hate, setHate] = useState(0);

    const updateLike = () =>{
        setLike(like + 1)

    }

    const updateHate = () =>{
        setHate(hate + 1)
    }

    const reset = () =>{
        setLike(0)
        setHate(0)
    }
    
        return (
            <div className="container">
            <div className="row justify-content-center my-4">
            <div className="col-4">
                <div className="card">
                    <img src="https://picsum.photos/600" class="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">A nice post</p>

                        <button type="button"
                         className="btn btn-success"
                          onClick={updateLike}>Like {like}
                          </button>

                        <button type="button"
                         className="btn btn-danger"
                          onClick={updateHate}>Hate {hate}
                          </button>

                        <button type="button"
                         className="btn btn-info" 
                         onClick={reset}>Reset
                         </button>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
}

export default Buttons;
