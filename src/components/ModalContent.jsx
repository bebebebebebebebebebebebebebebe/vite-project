import PropTypes from 'prop-types';

const contentList = [
  { id: 1, word: 'word1', example: 'example1' },
  { id: 2, word: 'word2', example: 'example2' },
  { id: 3, word: 'word3', example: 'example3' },
  { id: 4, word: 'word4', example: 'example4' },
  { id: 5, word: 'word5', example: 'example5' },
  { id: 6, word: 'word6', example: 'example6' },
  { id: 7, word: 'word7', example: 'example7' },
  { id: 8, word: 'word8', example: 'example8' },
];

const ModalContent = () => {
  const modalContainer = {
    width: '100%',
    paddingTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxHeight: '75vh',
  };

  const modalHeader = {
    width: '90%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '0 30px',
  };

  const ModalHeaderTitle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const arrowStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#555',
  };

  const itemStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '8px',
  };

  const wordStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '8px',
  };

  const exampleStyle = {
    fontSize: '16px',
    color: '#555',
    textAlign: 'left',
    wordBreak: 'break-word',
  };

  const ModalBody = {
    width: '100%',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  return (
    <div style={modalContainer}>
      <div style={modalHeader}>
        <div style={ModalHeaderTitle}>Source</div>
        <div style={arrowStyle}>&#8594;</div>
        <div style={ModalHeaderTitle}>Target</div>
      </div>

      <div style={ModalBody}>
        {contentList.map((item) => (
          <div key={item.id} style={itemStyle}>
            <div style={wordStyle}>{item.word}</div>
            <div style={exampleStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit eaque voluptates expedita suscipit officiis ea maiores reiciendis, repellat ab placeat non nihil officia reprehenderit neque soluta iure! Esse, quod.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ModalContent.propTypes = {
  contentList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      word: PropTypes.string.isRequired,
      example: PropTypes.string.isRequired,
    })
  ),
};

export default ModalContent;
