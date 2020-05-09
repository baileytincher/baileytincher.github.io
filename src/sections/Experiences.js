import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';
import Hide from '../components/Hide';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />

    <Triangle
      color="secondaryLight"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertY
    />
  </div>
);

const CARD_HEIGHT = '300px';

const MEDIA_QUERY_SMALL = '@media (max-width: 600px)';

const MEDIA_QUERY_HIDE = '@media (max-width: 600px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const Subtitle = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  color: ${props => props.theme.colors.primaryLight};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_HIDE} {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_HIDE} {
    width: 0;
    display: 'none';
  }
`;

const ProjectImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

const ProjectTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

const Experience = ({ name, startDate, endDate, position, items, logo }) => (
  <Card p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <span>
          <Title my={2} pb={1}>
            {name}
            <br />
            <Subtitle>{position}</Subtitle>
          </Title>
        </span>
        <Text width={[1]} style={{ overflow: 'auto' }}>
          <ul style={{ marginLeft: 0, paddingLeft: '1.5em' }}>
            {items.map(item => (
              <li style={{ marginBottom: '1em' }}>{item}</li>
            ))}
          </ul>
        </Text>
      </TextContainer>

      <Hide query={MEDIA_QUERY_HIDE}>
        <ImageContainer>
          <ProjectImage src={logo.image.src} alt={logo.title} />
          <ProjectTag>
            <Hide query={MEDIA_QUERY_SMALL}>
              <ImageSubtitle bg="backgroundDark">
                {`${startDate} - ${endDate || 'present'}`}
              </ImageSubtitle>
            </Hide>
          </ProjectTag>
        </ImageContainer>
      </Hide>
    </Flex>
  </Card>
);

Experience.propTypes = {
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  position: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string),
  logo: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
    }),
    title: PropTypes.string,
  }).isRequired,
};

const Experiences = () => (
  <Section.Container id="experiences" Background={Background}>
    <Section.Header name="Experiences" icon="💻" label="notebook" />
    <StaticQuery
      query={graphql`
        query ExperiencesQuery {
          contentfulAbout {
            experiences {
              id
              name
              startDate(formatString: "MMM YYYY")
              endDate(formatString: "MMM YYYY")
              position
              items
              logo {
                title
                image: resize(width: 200, quality: 100) {
                  src
                }
              }
            }
          }
        }
      `}
      render={({ contentfulAbout }) => (
        <CardContainer minWidth="550px">
          {contentfulAbout.experiences.map((p, i) => (
            <Fade bottom delay={i * 200} key={p.id}>
              <Experience {...p} />
            </Fade>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default Experiences;
