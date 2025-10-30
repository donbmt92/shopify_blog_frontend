import { useCallback } from 'react';

export const useBlockManager = (blocks, setBlocks, minBlocks = 1) => {
  const add = useCallback(() => {
    setBlocks([...blocks, { id: Date.now(), content: '', textAlign: 'justify' }]);
  }, [blocks, setBlocks]);

  const remove = useCallback((id) => {
    if (blocks.length > minBlocks) {
      setBlocks(blocks.filter(block => block.id !== id));
    }
  }, [blocks, setBlocks, minBlocks]);

  const update = useCallback((id, field, value) => {
    setBlocks(blocks.map(block => 
      block.id === id ? { ...block, [field]: value } : block
    ));
  }, [blocks, setBlocks]);

  return { add, remove, update };
};

export const useSectionManager = (sections, setSections) => {
  const add = useCallback(() => {
    setSections([...sections, { id: Date.now(), heading: '', content: '', textAlign: 'left' }]);
  }, [sections, setSections]);

  const remove = useCallback((id) => {
    setSections(sections.filter(section => section.id !== id));
  }, [sections, setSections]);

  const update = useCallback((id, field, value) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, [field]: value } : section
    ));
  }, [sections, setSections]);

  return { add, remove, update };
};

