import React from 'react';
import MenuTable from '../../components/MenuTable';

MenuPage.propTypes = {

};

function MenuPage(props) {
    return (
        <div>
            <>
                <div id="page-wrapper">
                    <div id="page-inner">
                        {/* /. ROW  */}
                        <div className="row">
                            <div className="col-md-12">
                                {/* Advanced Tables */}

                                <div className="panel panel-default ">
                                    <div className="panel-body">
                                        <div className="table-responsive">
                                            <MenuTable />
                                        </div>
                                        {/*End Advanced Tables */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
}

export default MenuPage;