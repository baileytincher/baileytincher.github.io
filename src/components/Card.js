import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Card as CardRebass, Link } from 'rebass';

export const CardContainer = styled.div`
  display: grid;
  grid-gap: 30px;

  grid-template-columns: repeat(
    auto-fill,
    minmax(${props => props.minWidth}, 1fr)
  );
  justify-items: center;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const StyledCard = styled(CardRebass).attrs({
  bg: 'white',
  boxShadow: 0,
  borderRadius: 8,
})`
  position: relative;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  top: 0;
  height: 100%;
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};

  ${props =>
    props.href
      ? '&:hover { top: -10px; box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2); cursor: pointer; }'
      : ''}
`;

export const Card = props => {
  const newProps = { ...props };

  if (newProps.href && newProps.href !== '') {
    const { href } = props;
    // delete newProps.href;

    return (
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}
      >
        <StyledCard {...newProps} />
      </Link>
    );
  }

  return <StyledCard {...newProps} />;
};

Card.propTypes = {
  href: PropTypes.string,
};

export default Card;
