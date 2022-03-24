import { Dialog, DialogContent, Typography } from '@mui/material';
import React from 'react';



function ConfirmForm({ open, handleClose, sizeList, formSize }) {
    return (
        <div>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogContent sx={{ height: (50 * formSize) }}><div>
                    {sizeList.map((text) => <><Typography>{text}</Typography><Typography>Vui lòng chọn size khác</Typography></>)}
                    <div className="flex justify-end">
                        <button className="btn  bg-black text-white mt-10 " type='submit' onClick={handleClose}>
                            Xác nhận
                        </button>
                    </div>

                </div>
                </DialogContent>

            </Dialog>


        </div>
    );
}

export default ConfirmForm;