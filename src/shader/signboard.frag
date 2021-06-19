precision highp float;

varying vec2 vTexCoord;

uniform float uInvTileSize;
uniform vec2 uResolution;
uniform float uEmission;
uniform float uBulbSize;
uniform sampler2D uTexture;

float sstep(float edge0, float edge1, float x) {
  // Scale, bias and saturate x to 0..1 range
  x = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
  // Evaluate polynomial
  return x * x * (3.0 - 2.0 * x);
}

void main() {
  vec2 tilesPerSide = floor(uResolution * uInvTileSize);
  vec2 invTilesPerSide = 1.0 / tilesPerSide;
  vec2 tileCenter = floor(vTexCoord * tilesPerSide) * invTilesPerSide + invTilesPerSide * 0.5;
  vec2 diffToCenter = vTexCoord - tileCenter;
  vec2 distToCenter = diffToCenter * diffToCenter * 4.0 * tilesPerSide * tilesPerSide;

  float dist = distToCenter.x + distToCenter.y;
  float dissipation = 1.0 - sstep(0.0, uBulbSize * uBulbSize, dist * dist);

  gl_FragColor = texture2D(uTexture, tileCenter) * dissipation * uEmission;
}
