import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import { useState } from "react";
import { useEffect } from "react";
import PositionedMenu from "./PositionedMenu";
import axios from "axios";
const token = localStorage.getItem("token");
export default function Editpost(props) {
  const [image, setimage] = useState(null);
  const [dis, setdis] = useState("");
  function handelupdate() {
    const id = props.id;
    console.log(id);
    axios
      .request({
        method: "put",
        url: `http://16.170.173.197/posts/${id}`,
        data: {
          description: dis,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  }

  const handleimgchange = (event) => {
    const file = event.target.files[0];
    setimage(file);
    // console.log(read);
  };
  return (
    <React.Fragment>
      <Modal open={props.open} onClose={() => props.setopen(false)}>
        <ModalDialog>
          <DialogTitle>Edit this post</DialogTitle>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              props.setopen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>New Image</FormLabel>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleimgchange}
                  style={{ display: "none" }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input
                  required
                  onChange={(e) => {
                    setdis(e.target.value);
                  }}
                />
              </FormControl>
              <Button
                onClick={() => {
                  handelupdate();
                }}
                type="submit"
              >
                Edit
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}