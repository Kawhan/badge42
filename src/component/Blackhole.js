/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Blackhole.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jaeskim <jaeskim@student.42seoul.kr>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/10/17 19:13:40 by jaeskim           #+#    #+#             */
/*   Updated: 2020/10/18 01:13:43 by jaeskim          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";

const getDayColor = (day) => {
  if (day >= 50) return "rgb(83, 210, 122)";
  if (day >= 30) return "rgb(223, 149, 57)";
  return "rgb(255,69,0)";
};

const Blackhole = ({ blackholeRemain }) => {
  const fillColor = getDayColor(blackholeRemain);
  return (
    <g transform="translate(324, 50)">
      <g transform="translate(0, 0)">
        <rect
          x="0.5"
          y="0.5"
          rx="4.5"
          height="50px"
          width="160px"
          fill="rgba(32,32,38,0.85)"
          opacity="0.75"
        />
        <g transform="translate(80, 15)">
          <text
            x="0"
            y="0"
            textAnchor="middle"
            style={{
              font:
                "400 9px 'Noto Sans', Arial, Helvetica, 'Sans serif', Ubuntu",
              fill: "#ffc221",
            }}
          >
            Black Hole absorption
          </text>
        </g>
        <g transform="translate(80, 37)">
          <text
            x="0"
            y="0"
            textAnchor="middle"
            style={{
              font:
                "400 20px 'Noto Sans', Arial, Helvetica, 'Sans serif', Ubuntu",
              fill: fillColor,
            }}
          >
            {blackholeRemain} days left!
          </text>
        </g>
      </g>
    </g>
  );
};

export default Blackhole;
