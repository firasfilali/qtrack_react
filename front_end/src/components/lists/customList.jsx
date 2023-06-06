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
        maxHeight: 300,
        borderRadius: "20px",

        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
        <li>
          <ul>
            <ListItem key={`item-${item}`}>
              <ListItemText primary={`Item ${item}`} />
            </ListItem>
          </ul>
        </li>
      ))}
    </List>
    
  );
}
