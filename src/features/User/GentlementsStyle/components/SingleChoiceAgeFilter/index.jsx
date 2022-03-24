import React from 'react';

SingleChoiceAgeFilter.propTypes = {

};

function SingleChoiceAgeFilter({ form }) {


    const { register } = form;
    return (
        <div className="filter-brand-left">
            <div className="title-left">
                <h3>Tuổi của bạn</h3>
            </div>
            <div className="brand-box">
                <ul>
                    <li>
                        <div className="radio radio-danger">
                            <input {...register("age")} id="Radios1" value="80" type="radio" />
                            <label htmlFor="Radios1"> Trên 60 </label>
                        </div>
                    </li>
                    <li>
                        <div className="radio radio-danger">
                            <input {...register("age")} id="Radios2" value="50-60" type="radio" />
                            <label htmlFor="Radios2"> 50-60 </label>
                        </div>
                    </li>
                    <li>
                        <div className="radio radio-danger">
                            <input {...register("age")} id="Radios3" value="45-50" type="radio" />
                            <label htmlFor="Radios3"> 45-50 </label>
                        </div>
                    </li>
                    <li>
                        <div className="radio radio-danger">
                            <input {...register("age")} id="Radios4" value="30-45" type="radio" />
                            <label htmlFor="Radios4"> 35-45 </label>
                        </div>
                    </li>
                    <li>
                        <div className="radio radio-danger">
                            <input {...register("age")} id="Radios4" value="25-30" type="radio" />
                            <label htmlFor="Radios4"> 25-30 </label>
                        </div>
                    </li>
                    <li>
                        <div className="radio radio-danger">
                            <input {...register("age")} id="Radios4" value="18-25" type="radio" />
                            <label htmlFor="Radios4"> 18-25 </label>
                        </div>
                    </li>

                    {/* <li>
                        <div className="radio radio-danger">
                            <input {...register("age")} id="Radios5" value="default" type="radio" />
                            <label htmlFor="Radios6">  Default </label>
                        </div>
                    </li> */}


                </ul>
            </div>
        </div>
    );
}

export default SingleChoiceAgeFilter;