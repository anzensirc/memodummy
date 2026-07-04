import Button from "./Button";

function ConfirmDialog({

    open,

    title = "Konfirmasi",

    message = "Apakah Anda yakin?",

    onConfirm,

    onCancel

}) {

    if (!open) return null;

    return (

        <div className="dialog-overlay">

            <div className="dialog">

                <h2>{title}</h2>

                <p>{message}</p>

                <div className="dialog-actions">

                    <Button
                        className="btn-secondary"
                        onClick={onCancel}
                    >
                        Batal
                    </Button>

                    <Button
                        className="btn-danger"
                        onClick={onConfirm}
                    >
                        Hapus
                    </Button>

                </div>

            </div>

        </div>

    );

}

export default ConfirmDialog;