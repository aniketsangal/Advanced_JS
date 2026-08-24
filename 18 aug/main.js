function calculate_area(radius)
{
    return 3.14 * radius * radius;
}

function calculate_circumference(radius)
{
    return 2 * 3.14 * radius;
}

module.exports = {
    calculate_area: calculate_area,
    calculate_circumference: calculate_circumference
};