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
        maxHeight: 200,
        borderRadius: "20px",

        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {[0, 1, 2, 3,4,5,6].map((item) => (
        <li key={`item-${item}`}>
          <ul>
            <ListItem >
              <ListItemText primary={`Item ${item}`} />
            </ListItem>
          </ul>
        </li>
      ))}
    </List>
    
  );
}
