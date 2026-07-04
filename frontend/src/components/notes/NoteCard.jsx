import { Link } from "react-router-dom";

import Button from "../common/Button";

function NoteCard({

    note,

    onDelete

}) {

    return (

        <div className="note-card">

            <div className="note-content">

                <h3>

                    {note.header || "(Tanpa Judul)"}

                </h3>

            </div>

            <div className="note-actions">

                <Link to={`/edit/${note.id}`}>

                    <Button>

                        Edit

                    </Button>

                </Link>

                <Button
                    className="btn-danger"
                    onClick={() => onDelete(note)}
                >

                    Hapus

                </Button>

            </div>

        </div>

    );

}

export default NoteCard;