import React, { useState } from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const AccordionItem = (props) => (
  <Box
    border="1px solid #ccc"
    marginBottom="0px" 
    borderRadius="5px"
    width="500px"
    backgroundColor="#f0f8ff" 
    {...props}
  />
);

const AccordionTitle = (props) => (
  <Typography
    variant="h6"
    padding="10px"
    cursor="pointer"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    color="#333" 
    backgroundColor="#6495ED" 
    borderRadius="5px 5px 0 0" 
    {...props}
  />
);

const AccordionContent = (props) => (
  <Box padding="10px" color="#555" {...props} /> 
);

export const Accordian = () => {
  const items = [
    {
      id: 1,
      title: 'title one',
      content: 'abs of the kingdom manipulation',
    },
    {
      id: 2,
      title: 'title two',
      content: 'abs of the kingdom manipulation',
    },
    {
      id: 3,
      title: 'title three',
      content: 'abs of the kingdom manipulation',
    },
    {
      id: 4,
      title: 'title four',
      content: 'abs of the kingdom manipulation',
    },
  ];

  const [indexx, setIndex] = useState(null);

  const toggleIndex = (id) => {
    setIndex(indexx === id ? null : id);
  };

  return (
    <div>
      {items.map((data) => (
        <AccordionItem key={data.id}>
          <AccordionTitle onClick={() => toggleIndex(data.id)}>
            {data.title}
            <IconButton>
              <FontAwesomeIcon
                icon={indexx === data.id ? faAngleDown : faAngleRight}
                color="#fff" 
              />
            </IconButton>
          </AccordionTitle>
          {indexx === data.id && (
            <AccordionContent>
              <Typography variant="body1">{data.content}</Typography>
            </AccordionContent>
          )}
        </AccordionItem>
      ))}
    </div>
  );
};
