import React from 'react';
import styled from 'styled-components/native';

interface CardProps {
  bgColor?: string;
}

const Card = styled.View<CardProps>`
width: 90%;
padding: 16px;
background-color: ${({ bgColor }: CardProps) => bgColor || '#ffc107'};
border-radius: 8px;
margin: 8px auto;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

const LeftColumn = styled.View`
  width: 40%;
  align-items: center;
`;

const RightColumn = styled.View`
  flex: 1;
  padding-left: 16px;
`;

const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const PokemonImage = styled.Image`
  width: 100px;
  height: 100px;
`;

const AbilitiesTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
  text-transform: uppercase;
`;

const AbilitiesGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const AbilityItem = styled.View`
  width: 50%;
  padding: 4px;
  align-items: center;
`;

const AbilityText = styled.Text`
  font-size: 12px;
  text-transform: uppercase;
`;

const StatsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const StatItem = styled.View`
  flex: 1;
  align-items: center;
`;

const StatLabel = styled.Text`
  font-weight: bold;
`;

const StatValue = styled.Text`
  font-size: 14px;
`;

type StatType = {
  stat: string;
  base: number;
};

interface PokemonCardProps {
  name: string;
  photo: string;
  color: string;
  abilities: string[];
  stats?: StatType[];
}

export default function PokemonCard({
  name,
  photo,
  color,
  abilities = [],
  stats = [],
}: PokemonCardProps) {
  const statMap: { [key: string]: string } = {
    attack: 'ATK',
    defense: 'DEF',
    speed: 'APE',
    hp: 'HP',
  };

  const order = ['attack', 'defense', 'speed', 'hp'];
  const orderedStats = order
    .map((key) => {
      const stat = stats.find((s) => s.stat === key);
      return stat ? { label: statMap[key], value: stat.base } : null;
    })
    .filter(Boolean) as { label: string; value: number }[];

  return (
    <Card bgColor={color}>
      <Row>
        <LeftColumn>
          <Name>{name}</Name>
          <PokemonImage source={{ uri: photo }} />
        </LeftColumn>
        <RightColumn>
          <AbilitiesTitle>HABILIDADES</AbilitiesTitle>
          <AbilitiesGrid>
            {abilities.map((ability) => (
              <AbilityItem key={ability}>
                <AbilityText>{ability}</AbilityText>
              </AbilityItem>
            ))}
          </AbilitiesGrid>
          <StatsRow>
            {orderedStats.map(({ label, value }) => (
              <StatItem key={label}>
                <StatLabel>{label}</StatLabel>
                <StatValue>{value}</StatValue>
              </StatItem>
            ))}
          </StatsRow>
        </RightColumn>
      </Row>
    </Card>
  );
}