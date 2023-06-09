import React, { useState } from 'react';
import {
  VStack,
  Heading,
  Text,
  Select,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export const Glossary = ({ definitions }) => {
  const [activeType, setActiveType] = useState(definitions[0]);

  return (
    <VStack spacing={4}>
      <Select
        id="component-type"
        aria-label="Component type"
        placeholder="Select component type"
        onChange={(e) => {
          setActiveType(definitions[e.target.value]);
        }}
      >
        {definitions.map((type, idx) => (
          <option value={idx} selected={type.name === activeType.name}>
            {type.name}
          </option>
        ))}
      </Select>

      <LinkBox p={5} shadow="base" borderRadius="xl">
        <Heading fontSize="xl">{activeType.name}</Heading>
        <Text mt={4}>{activeType.description}</Text>

        <LinkOverlay
          href={`https://storybook.js.org/showcase/tag/${activeType.slug}`}
          color="brand.300"
          isExternal
        >
          Browse examples <ExternalLinkIcon mx="2px" />
        </LinkOverlay>
      </LinkBox>
    </VStack>
  );
};
