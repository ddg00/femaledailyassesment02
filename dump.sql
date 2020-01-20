-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Jan 20, 2020 at 07:15 AM
-- Server version: 5.7.29
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pivot`
--

-- --------------------------------------------------------

--
-- Table structure for table `shopinglog`
--

CREATE TABLE `shopinglog` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `item` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shopinglog`
--

INSERT INTO `shopinglog` (`id`, `name`, `email`, `item`, `quantity`, `total`) VALUES
(1, 'Tommy Bejo', 'tommy@mail.com', 'Barang1', 2, 100000),
(2, 'Joko Widodo', 'joko@mail.com', 'Barang2', 1, 50000),
(3, 'Jusuf Kalla', 'jusuf@mail.com', 'Barang3', 3, 150000),
(4, 'Tommy Bejo', 'tommy@mail.com', 'Barang2', 2, 100000),
(5, 'Robert Garcia', 'robert@mail.com', 'Barang10', 3, 150000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `shopinglog`
--
ALTER TABLE `shopinglog`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `shopinglog`
--
ALTER TABLE `shopinglog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
