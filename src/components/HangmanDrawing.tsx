import { DRAW } from '../constants';

interface Props {
  bodyPartsVisible: number;
}

const Head = (
  <div
    style={{
      width: `${DRAW.head_size}px`,
      height: `${DRAW.head_size}px`,
      borderRadius: '100%',
      border: `${DRAW.thickness}px solid black`,
      position: 'absolute',
      top: `${DRAW.rope_height}px`,
      right: `${-(DRAW.head_size + DRAW.thickness) / 2}px`,
    }}
  />
);

const Body = (
  <div
    style={{
      width: `${DRAW.thickness}px`,
      height: `${DRAW.body_size}px`,
      background: 'black',
      position: 'absolute',
      top: `${DRAW.head_size + DRAW.thickness * 2 + DRAW.rope_height}px`,
      right: `0px`,
    }}
  />
);

const RightArm = (
  <div
    style={{
      width: `${DRAW.arm_size}px`,
      height: `${DRAW.thickness}px`,
      background: 'black',
      position: 'absolute',
      top: `${DRAW.head_size + DRAW.thickness * 2 + DRAW.rope_height + DRAW.arm_offset}px`,
      right: `${-DRAW.arm_size}px`,
      rotate: `${-DRAW.arm_angle}deg`,
      transformOrigin: 'left bottom',
    }}
  />
);

const LeftArm = (
  <div
    style={{
      width: `${DRAW.arm_size}px`,
      height: `${DRAW.thickness}px`,
      background: 'black',
      position: 'absolute',
      top: `${DRAW.head_size + DRAW.thickness * 2 + DRAW.rope_height + DRAW.arm_offset}px`,
      right: `${DRAW.thickness}px`,
      rotate: `${DRAW.arm_angle}deg`,
      transformOrigin: 'right bottom',
    }}
  />
);

const RightLeg = (
  <div
    style={{
      width: `${DRAW.leg_size}px`,
      height: `${DRAW.thickness}px`,
      background: 'black',
      position: 'absolute',
      top: `${DRAW.head_size + DRAW.thickness + DRAW.rope_height + DRAW.body_size}px`,
      right: `${-DRAW.leg_size}px`,
      rotate: `${DRAW.leg_angle}deg`,
      transformOrigin: 'left top',
    }}
  />
);

const LeftLeg = (
  <div
    style={{
      width: `${DRAW.leg_size}px`,
      height: `${DRAW.thickness}px`,
      background: 'black',
      position: 'absolute',
      top: `${DRAW.head_size + DRAW.thickness + DRAW.rope_height + DRAW.body_size}px`,
      right: `${DRAW.thickness}px`,
      rotate: `${-DRAW.leg_angle}deg`,
      transformOrigin: 'right top',
    }}
  />
);

const HangmanDrawing = ({ bodyPartsVisible = 0 }: Props) => {
  return (
    <div style={{ position: 'relative' }}>
      {bodyPartsVisible > 0 && Head}
      {bodyPartsVisible > 1 && Body}
      {bodyPartsVisible > 2 && RightArm}
      {bodyPartsVisible > 3 && LeftArm}
      {bodyPartsVisible > 4 && RightLeg}
      {bodyPartsVisible > 5 && LeftLeg}
      {/* hang rope */}
      <div
        style={{
          height: `${DRAW.rope_height}px`,
          width: `${DRAW.thickness}px`,
          background: 'black',
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      />
      {/* hang top pole */}
      <div
        style={{
          height: `${DRAW.thickness}px`,
          width: `${DRAW.top_pole_width}px`,
          background: 'black',
          marginLeft: `${(DRAW.hang_width - DRAW.thickness) / 2}px`,
        }}
      />
      {/* hang pole */}
      <div
        style={{
          height: `${DRAW.hang_height}px`,
          width: `${DRAW.thickness}px`,
          background: 'black',
          marginLeft: `${(DRAW.hang_width - DRAW.thickness) / 2}px`,
        }}
      />
      {/* hang base */}
      <div
        style={{
          height: `${DRAW.thickness}px`,
          width: `${DRAW.hang_width}px`,
          background: 'black',
        }}
      />
    </div>
  );
};

export default HangmanDrawing;
