import { useEffect, useState } from "react";

import Button from "../common/Button";

function NoteForm({

    initialData,

    onSubmit,

    loading

}) {

    const [header, setHeader] = useState("");

    const [content, setContent] = useState("");

    useEffect(() => {

        if (!initialData) return;

        setHeader(initialData.header || "");

        setContent(

            initialData.content.join("\n")

        );

    }, [initialData]);

    function handleSubmit(e) {

        e.preventDefault();

        const rows = content

            .split("\n")

            .map(item => item.trim())

            .filter(item => item !== "");

        onSubmit({

            header,

            content: rows

        });

    }

    return (

        <form
            className="note-form"
            onSubmit={handleSubmit}
        >

            <div className="form-group">

                <label>

                    Header

                </label>

                <input

                    type="text"

                    placeholder="Header (Opsional)"

                    value={header}

                    onChange={(e) => setHeader(e.target.value)}

                />

            </div>

            <div className="form-group">

                <label>

                    Isi Catatan

                </label>

                <textarea

                    rows="12"

                    placeholder="Satu baris = satu item"

                    value={content}

                    onChange={(e) => setContent(e.target.value)}

                />

            </div>

            <Button

                type="submit"

                disabled={loading}

            >

                {

                    loading

                        ? "Menyimpan..."

                        : "Simpan"

                }

            </Button>

        </form>

    );

}

export default NoteForm;