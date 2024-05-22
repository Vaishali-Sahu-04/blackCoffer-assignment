import Data from '../models/data.model.js';

export const getAllData = async (req, res) => {
  try {
    const { page = 1, limit = 10, end_year, topic, sector, region, pestle, source, swot, country, city } = req.query;

    const filters = {};
    if (end_year) filters.end_year = end_year;
    if (topic) filters.topic = topic;
    if (sector) filters.sector = sector;
    if (region) filters.region = region;
    if (pestle) filters.pestle = pestle;
    if (source) filters.source = source;
    if (swot) filters.swot = swot;
    if (country) filters.country = country;
    if (city) filters.city = city;

    const skip = (page - 1) * limit;

    const data = await Data.find(filters).skip(skip).limit(limit);

    const totalItems = await Data.countDocuments(filters);
    const totalPages = Math.ceil(totalItems / limit);

    res.json({
      data,
      currentPage: page,
      totalPages,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
