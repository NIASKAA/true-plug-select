import React from "react";
import { Button, FileUpload } from "react-bootstrap";
import './styles.css'
const AuctionSubmitForm = () => {
  return (
    <div>
      <input
        accept="image/*"
        onChange={handleChange("image")}
        id="icon-button-file"
        style={{ display: "none" }}
        type="file"
      />
      <label htmlFor="icon-button-file">
        <Button variant="contained" color="secondary" component="span">
          Upload Logo <FileUpload />
        </Button>
      </label>
      <span>{values.image ? values.image.name : ""}</span>
      <TextField
        label="Auction Start Time"
        type="datetime-local"
        defaultValue={defaultStartTime}
        onChange={handleChange("bidStart")}
      />
      <TextField
        label="Auction End Time"
        type="datetime-local"
        defaultValue={defaultEndTime}
        onChange={handleChange("bidEnd")}
      />
    </div>
  );
};

export default AuctionSubmitForm;
