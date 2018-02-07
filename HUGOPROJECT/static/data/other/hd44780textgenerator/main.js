var CHAR_SIZE_5x8 = 0;
var CHAR_SIZE_5x7 = 1;

var canvas;
var ctx;
var width = 16;
var height = 2;
var charSpacing = 3;
var cellSpacing = 1;
var cellSize = 4;
var charWidth = 5;
var charHeight = 8;
var backgroundColor = "#1B4676";
var foregroundColor = "#0D3EFF";
var fontColor = "#FFFFFF";
var chars = new Array();

function init(canvasp)
{
    canvas = canvasp;
    canvas.addEventListener("click", canvasClick, false);
    ctx = canvas.getContext('2d');
}

function setParams(widthp, heightp, charSpacingp, cellSpacingp, cellSizep, charWidthp, charHeightp, backgroundColorp, foregroundColorp, fontColorp)
{
    width = widthp;
    height = heightp;
    charSpacing = charSpacingp;
    cellSpacing = cellSpacingp;
    cellSize = cellSizep;
    charWidth = charWidthp;
    charHeight = charHeightp;
    backgroundColor = backgroundColorp;
    foregroundColor = foregroundColorp;
    fontColor = fontColorp;
}
function setCellSize(cellSizep)
{
    cellSize = cellSizep;
}
function setCellSpacing(cellSpacingp)
{
    cellSpacing = cellSpacingp;
}
function setCharSpacing(charSpacingp)
{
    charSpacing = charSpacingp;
}
function setWidth(widthp)
{
    width = widthp;
}
function setHeight(heightp)
{
    height = heightp;
}
function generate()
{
    canvas.width = (width + 1) * charSpacing + ((charWidth - 1) * cellSpacing * width) + (charWidth * cellSize * width);
    canvas.height = (height + 1) * charSpacing + ((charHeight - 1) * cellSpacing * height) + (charHeight * cellSize * height);

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    chars = new Array(width * height);

    for (var x = 0; x < width; x++)
    {
        for (var y = 0; y < height; y++)
        {
            chars[width * y + x] = new Array(charWidth * charHeight);
            for (var cx = 0; cx < charWidth; cx++)
            {
                for (var cy = 0; cy < charHeight; cy++)
                {
                    setCell(x, y, cx, cy, 0);
                }
            }
        }
    }
}

function setChar(charX, charY, charCode)
{
    var p = patterns[charCode];
    if (p == null) return;
    if (charX < 0 || charX >= width || charY < 0 || charY >= height) return;
    for (var i = 0; i < p.length; i++) setCell(charX, charY, i % charWidth, Math.floor(i / charWidth), parseInt(p[i]));
}

function setCell(charX, charY, cellX, cellY, value)
{
    ctx.fillStyle = (value == 0 ? foregroundColor : fontColor);
    var coord = getCellCoords(charX, charY, cellX, cellY);
    ctx.fillRect(coord.x, coord.y, cellSize, cellSize);
    chars[width * charY + charX][charWidth * cellY + cellX] = (value == 0 ? '0' : '1');
}
function getCell(charX, charY, cellX, cellY)
{
    return (chars[width * charY + charX][charWidth * cellY + cellX] == '0' ? 0 : 1);
}

function getCellCoords(charX, charY, cellX, cellY)
{
    var x = (charX + 1) * charSpacing + ((charWidth - 1) * cellSpacing * charX) + (charWidth * cellSize * charX) + cellX * (cellSize + cellSpacing);
    var y = (charY + 1) * charSpacing + ((charHeight - 1) * cellSpacing * charY) + (charHeight * cellSize * charY) + cellY * (cellSize + cellSpacing);

    return new Coord(x, y);
}

function mapToCell(position)
{
    var totalCharPixelWidth = charWidth * cellSize + (charWidth - 1) * cellSpacing + charSpacing;
    var totalCharPixelHeight = charHeight * cellSize + (charHeight - 1) * cellSpacing + charSpacing;

    var mappedCharX = Math.floor(position.x / totalCharPixelWidth);
    var mappedCharY = Math.floor(position.y / totalCharPixelHeight);

    var positionInChar = new Coord(position.x % totalCharPixelWidth, position.y % totalCharPixelHeight);

    var totalCellSize = cellSize + cellSpacing;

    var mappedCellX = Math.floor(positionInChar.x / totalCellSize);
    var mappedCellY = Math.floor(positionInChar.y / totalCellSize);

    return new Cell(new Coord(mappedCharX, mappedCharY), new Coord(mappedCellX, mappedCellY));
}

function writeText(text)
{
    var currentX = 0;
    var currentY = 0;
    for (var i = 0; i < text.length; i++)
    {
        if (text[i] == '\n')
        {
            currentX = 0;
            currentY++;
            continue;
        }

        setChar(currentX, currentY, text[i]);
        currentX++;
    }
}

function canvasClick(event)
{
    var rect = canvas.getBoundingClientRect();
    var pos = new Coord(event.clientX - rect.left, event.clientY - rect.top);

    var map = mapToCell(pos);

    var currentValue = getCell(map.char.x, map.char.y, map.cell.x, map.cell.y);
    setCell(map.char.x, map.char.y, map.cell.x, map.cell.y, !currentValue);
}

function Coord(x, y)
{
    this.x = x;
    this.y = y;
}

function Cell(char, cell)
{
    this.char = char;
    this.cell = cell;
}