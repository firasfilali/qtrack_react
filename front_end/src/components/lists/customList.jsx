import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function PinnedSubheaderList() {
  return (
    
    <List
      sx={{
        width: "100%",
        bgcolor: "white",
        overflow: "auto",
        height: 200,
        borderRadius: "20px",

        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {[1].map((item) => (
        <li key={`item-${item}`}>
          <ul>
            <ListItem >
              <ListItemText primary={`Action de correction ${item}`} />
            </ListItem>
          </ul>
        </li>
      ))}
    </List>
    
  );
}
