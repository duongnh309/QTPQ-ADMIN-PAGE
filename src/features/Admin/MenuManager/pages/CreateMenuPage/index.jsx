import React from 'react';
import CreateAMenu from '../../components/CreateAMenu';

CreateMenuPage.propTypes = {

};

function CreateMenuPage(props) {


    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Menu Manager</h2>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default ">
                                <div className="panel-heading">
                                    Create a new menu
                                </div>
                                <div className="panel-body">
                                    <div className="">
                                        <CreateAMenu />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CreateMenuPage;