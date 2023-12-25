-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 04, 2023 at 02:21 PM
-- Server version: 10.4.21-MariaDB-log
-- PHP Version: 7.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oclockne_Webtest`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--
CREATE DATABASE oclockne_webtest;
USE oclockne_webtest;

CREATE TABLE `category` (
  `CID` int(10) NOT NULL,
  `Category_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`CID`, `Category_name`) VALUES
(1, 'T-shirt'),
(2, 'Jeans');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `IMG_ID` int(11) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `uploaded_on` datetime NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `Image_path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`IMG_ID`, `file_name`, `uploaded_on`, `status`, `Image_path`) VALUES
(1, '1.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/1.jpg'),
(2, '10.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/10.jpg'),
(3, '100.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/100.jpg'),
(4, '101.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/101.jpg'),
(5, '102.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/102.jpg'),
(6, '103.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/103.jpg'),
(7, '104.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/104.jpg'),
(8, '105.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/105.jpg'),
(9, '106.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/106.jpg'),
(10, '107.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/107.jpg'),
(11, '108.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/108.jpg'),
(12, '109.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/109.jpg'),
(13, '11.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/11.jpg'),
(14, '110.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/110.jpg'),
(15, '111.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/111.jpg'),
(16, '112.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/112.jpg'),
(17, '113.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/113.jpg'),
(18, '114.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/114.jpg'),
(19, '115.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/115.jpg'),
(20, '116.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/116.jpg'),
(21, '117.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/117.jpg'),
(22, '118.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/118.jpg'),
(23, '119.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/119.jpg'),
(24, '12.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/12.jpg'),
(25, '120.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/120.jpg'),
(26, '121.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/121.jpg'),
(27, '122.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/122.jpg'),
(28, '123.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/123.jpg'),
(29, '124.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/124.jpg'),
(30, '125.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/125.jpg'),
(31, '126.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/126.jpg'),
(32, '127.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/127.jpg'),
(33, '128.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/128.jpg'),
(34, '129.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/129.jpg'),
(35, '13.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/13.jpg'),
(36, '130.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/130.jpg'),
(37, '131.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/131.jpg'),
(38, '132.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/132.jpg'),
(39, '133.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/133.jpg'),
(40, '134.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/134.jpg'),
(41, '135.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/135.jpg'),
(42, '136.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/136.jpg'),
(43, '137.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/137.jpg'),
(44, '138.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/138.jpg'),
(45, '139.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/139.jpg'),
(46, '14.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/14.jpg'),
(47, '140.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/140.jpg'),
(48, '141.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/141.jpg'),
(49, '142.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/142.jpg'),
(50, '143.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/143.jpg'),
(51, '144.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/144.jpg'),
(52, '145.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/145.jpg'),
(53, '146.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/146.jpg'),
(54, '147.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/147.jpg'),
(55, '148.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/148.jpg'),
(56, '149.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/149.jpg'),
(57, '15.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/15.jpg'),
(58, '150.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/150.jpg'),
(59, '151.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/151.jpg'),
(60, '152.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/152.jpg'),
(61, '153.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/153.jpg'),
(62, '154.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/154.jpg'),
(63, '155.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/155.jpg'),
(64, '156.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/156.jpg'),
(65, '157.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/157.jpg'),
(66, '158.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/158.jpg'),
(67, '159.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/159.jpg'),
(68, '16.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/16.jpg'),
(69, '160.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/160.jpg'),
(70, '161.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/161.jpg'),
(71, '162.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/162.jpg'),
(72, '163.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/163.jpg'),
(73, '164.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/164.jpg'),
(74, '165.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/165.jpg'),
(75, '166.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/166.jpg'),
(76, '167.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/167.jpg'),
(77, '168.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/168.jpg'),
(78, '169.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/169.jpg'),
(79, '17.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/17.jpg'),
(80, '170.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/170.jpg'),
(81, '171.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/171.jpg'),
(82, '172.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/172.jpg'),
(83, '173.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/173.jpg'),
(84, '174.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/174.jpg'),
(85, '175.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/175.jpg'),
(86, '176.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/176.jpg'),
(87, '177.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/177.jpg'),
(88, '178.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/178.jpg'),
(89, '179.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/179.jpg'),
(90, '18.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/18.jpg'),
(91, '180.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/180.jpg'),
(92, '181.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/181.jpg'),
(93, '182.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/182.jpg'),
(94, '183.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/183.jpg'),
(95, '184.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/184.jpg'),
(96, '185.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/185.jpg'),
(97, '186.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/186.jpg'),
(98, '187.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/187.jpg'),
(99, '188.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/188.jpg'),
(100, '189.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/189.jpg'),
(101, '19.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/19.jpg'),
(102, '190.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/190.jpg'),
(103, '191.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/191.jpg'),
(104, '192.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/192.jpg'),
(105, '193.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/193.jpg'),
(106, '194.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/194.jpg'),
(107, '195.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/195.jpg'),
(108, '196.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/196.jpg'),
(109, '197.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/197.jpg'),
(110, '198.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/198.jpg'),
(111, '199.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/199.jpg'),
(112, '2.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/2.jpg'),
(113, '20.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/20.jpg'),
(114, '21.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/21.jpg'),
(115, '22.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/22.jpg'),
(116, '23.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/23.jpg'),
(117, '24.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/24.jpg'),
(118, '25.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/25.jpg'),
(119, '26.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/26.jpg'),
(120, '27.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/27.jpg'),
(121, '28.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/28.jpg'),
(122, '29.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/29.jpg'),
(123, '3.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/3.jpg'),
(124, '30.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/30.jpg'),
(125, '31.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/31.jpg'),
(126, '32.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/32.jpg'),
(127, '33.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/33.jpg'),
(128, '34.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/34.jpg'),
(129, '35.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/35.jpg'),
(130, '36.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/36.jpg'),
(131, '37.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/37.jpg'),
(132, '38.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/38.jpg'),
(133, '39.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/39.jpg'),
(134, '4.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/4.jpg'),
(135, '40.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/40.jpg'),
(136, '41.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/41.jpg'),
(137, '42.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/42.jpg'),
(138, '43.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/43.jpg'),
(139, '44.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/44.jpg'),
(140, '45.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/45.jpg'),
(141, '46.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/46.jpg'),
(142, '47.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/47.jpg'),
(143, '48.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/48.jpg'),
(144, '49.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/49.jpg'),
(145, '5.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/5.jpg'),
(146, '50.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/50.jpg'),
(147, '51.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/51.jpg'),
(148, '52.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/52.jpg'),
(149, '53.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/53.jpg'),
(150, '54.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/54.jpg'),
(151, '55.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/55.jpg'),
(152, '56.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/56.jpg'),
(153, '57.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/57.jpg'),
(154, '58.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/58.jpg'),
(155, '59.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/59.jpg'),
(156, '6.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/6.jpg'),
(157, '60.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/60.jpg'),
(158, '61.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/61.jpg'),
(159, '62.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/62.jpg'),
(160, '63.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/63.jpg'),
(161, '64.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/64.jpg'),
(162, '65.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/65.jpg'),
(163, '66.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/66.jpg'),
(164, '67.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/67.jpg'),
(165, '68.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/68.jpg'),
(166, '69.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/69.jpg'),
(167, '7.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/7.jpg'),
(168, '70.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/70.jpg'),
(169, '71.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/71.jpg'),
(170, '72.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/72.jpg'),
(171, '73.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/73.jpg'),
(172, '74.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/74.jpg'),
(173, '75.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/75.jpg'),
(174, '76.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/76.jpg'),
(175, '77.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/77.jpg'),
(176, '78.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/78.jpg'),
(177, '79.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/79.jpg'),
(178, '8.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/8.jpg'),
(179, '80.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/80.jpg'),
(180, '81.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/81.jpg'),
(181, '82.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/82.jpg'),
(182, '83.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/83.jpg'),
(183, '84.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/84.jpg'),
(184, '85.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/85.jpg'),
(185, '86.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/86.jpg'),
(186, '87.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/87.jpg'),
(187, '88.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/88.jpg'),
(188, '89.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/89.jpg'),
(189, '9.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/9.jpg'),
(190, '90.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/90.jpg'),
(191, '91.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/91.jpg'),
(192, '92.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/92.jpg'),
(193, '93.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/93.jpg'),
(194, '94.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/94.jpg'),
(195, '95.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/95.jpg'),
(196, '96.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/96.jpg'),
(197, '97.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/97.jpg'),
(198, '98.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/98.jpg'),
(199, '99.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/tshirt/99.jpg'),
(200, '1.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/1.jpg'),
(201, '10.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/10.jpg'),
(202, '100.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/100.jpg'),
(203, '101.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/101.jpg'),
(204, '102.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/102.jpg'),
(205, '103.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/103.jpg'),
(206, '104.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/104.jpg'),
(207, '105.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/105.jpg'),
(208, '106.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/106.jpg'),
(209, '107.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/107.jpg'),
(210, '108.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/108.jpg'),
(211, '109.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/109.jpg'),
(212, '11.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/11.jpg'),
(213, '110.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/110.jpg'),
(214, '111.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/111.jpg'),
(215, '112.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/112.jpg'),
(216, '113.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/113.jpg'),
(217, '114.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/114.jpg'),
(218, '115.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/115.jpg'),
(219, '116.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/116.jpg'),
(220, '117.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/117.jpg'),
(221, '118.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/118.jpg'),
(222, '119.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/119.jpg'),
(223, '12.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/12.jpg'),
(224, '120.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/120.jpg'),
(225, '121.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/121.jpg'),
(226, '122.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/122.jpg'),
(227, '123.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/123.jpg'),
(228, '124.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/124.jpg'),
(229, '125.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/125.jpg'),
(230, '126.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/126.jpg'),
(231, '127.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/127.jpg'),
(232, '128.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/128.jpg'),
(233, '129.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/129.jpg'),
(234, '13.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/13.jpg'),
(235, '130.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/130.jpg'),
(236, '131.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/131.jpg'),
(237, '132.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/132.jpg'),
(238, '133.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/133.jpg'),
(239, '134.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/134.jpg'),
(240, '135.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/135.jpg'),
(241, '136.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/136.jpg'),
(242, '137.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/137.jpg'),
(243, '138.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/138.jpg'),
(244, '139.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/139.jpg'),
(245, '14.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/14.jpg'),
(246, '140.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/140.jpg'),
(247, '141.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/141.jpg'),
(248, '142.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/142.jpg'),
(249, '143.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/143.jpg'),
(250, '144.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/144.jpg'),
(251, '145.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/145.jpg'),
(252, '146.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/146.jpg'),
(253, '147.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/147.jpg'),
(254, '148.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/148.jpg'),
(255, '149.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/149.jpg'),
(256, '15.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/15.jpg'),
(257, '150.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/150.jpg'),
(258, '151.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/151.jpg'),
(259, '152.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/152.jpg'),
(260, '153.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/153.jpg'),
(261, '154.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/154.jpg'),
(262, '155.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/155.jpg'),
(263, '156.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/156.jpg'),
(264, '157.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/157.jpg'),
(265, '158.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/158.jpg'),
(266, '159.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/159.jpg'),
(267, '16.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/16.jpg'),
(268, '160.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/160.jpg'),
(269, '161.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/161.jpg'),
(270, '162.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/162.jpg'),
(271, '163.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/163.jpg'),
(272, '164.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/164.jpg'),
(273, '165.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/165.jpg'),
(274, '166.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/166.jpg'),
(275, '167.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/167.jpg'),
(276, '168.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/168.jpg'),
(277, '169.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/169.jpg'),
(278, '17.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/17.jpg'),
(279, '170.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/170.jpg'),
(280, '171.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/171.jpg'),
(281, '172.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/172.jpg'),
(282, '173.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/173.jpg'),
(283, '174.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/174.jpg'),
(284, '175.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/175.jpg'),
(285, '176.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/176.jpg'),
(286, '177.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/177.jpg'),
(287, '178.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/178.jpg'),
(288, '179.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/179.jpg'),
(289, '18.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/18.jpg'),
(290, '180.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/180.jpg'),
(291, '181.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/181.jpg'),
(292, '182.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/182.jpg'),
(293, '183.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/183.jpg'),
(294, '184.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/184.jpg'),
(295, '185.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/185.jpg'),
(296, '186.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/186.jpg'),
(297, '187.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/187.jpg'),
(298, '188.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/188.jpg'),
(299, '189.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/189.jpg'),
(300, '19.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/19.jpg'),
(301, '190.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/190.jpg'),
(302, '191.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/191.jpg'),
(303, '192.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/192.jpg'),
(304, '193.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/193.jpg'),
(305, '194.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/194.jpg'),
(306, '195.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/195.jpg'),
(307, '196.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/196.jpg'),
(308, '197.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/197.jpg'),
(309, '198.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/198.jpg'),
(310, '199.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/199.jpg'),
(311, '2.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/2.jpg'),
(312, '20.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/20.jpg'),
(313, '21.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/21.jpg'),
(314, '22.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/22.jpg'),
(315, '23.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/23.jpg'),
(316, '24.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/24.jpg'),
(317, '25.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/25.jpg'),
(318, '26.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/26.jpg'),
(319, '27.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/27.jpg'),
(320, '28.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/28.jpg'),
(321, '29.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/29.jpg'),
(322, '3.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/3.jpg'),
(323, '30.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/30.jpg'),
(324, '31.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/31.jpg'),
(325, '32.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/32.jpg'),
(326, '33.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/33.jpg'),
(327, '34.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/34.jpg'),
(328, '35.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/35.jpg'),
(329, '36.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/36.jpg'),
(330, '37.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/37.jpg'),
(331, '38.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/38.jpg'),
(332, '39.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/39.jpg'),
(333, '4.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/4.jpg'),
(334, '40.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/40.jpg'),
(335, '41.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/41.jpg'),
(336, '42.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/42.jpg'),
(337, '43.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/43.jpg'),
(338, '44.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/44.jpg'),
(339, '45.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/45.jpg'),
(340, '46.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/46.jpg'),
(341, '47.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/47.jpg'),
(342, '48.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/48.jpg'),
(343, '49.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/49.jpg'),
(344, '5.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/5.jpg'),
(345, '50.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/50.jpg'),
(346, '51.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/51.jpg'),
(347, '52.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/52.jpg'),
(348, '53.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/53.jpg'),
(349, '54.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/54.jpg'),
(350, '55.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/55.jpg'),
(351, '56.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/56.jpg'),
(352, '57.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/57.jpg'),
(353, '58.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/58.jpg'),
(354, '59.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/59.jpg'),
(355, '6.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/6.jpg'),
(356, '60.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/60.jpg'),
(357, '61.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/61.jpg'),
(358, '62.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/62.jpg'),
(359, '63.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/63.jpg'),
(360, '64.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/64.jpg'),
(361, '65.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/65.jpg'),
(362, '66.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/66.jpg'),
(363, '67.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/67.jpg'),
(364, '68.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/68.jpg'),
(365, '69.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/69.jpg'),
(366, '7.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/7.jpg'),
(367, '70.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/70.jpg'),
(368, '71.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/71.jpg'),
(369, '72.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/72.jpg'),
(370, '73.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/73.jpg'),
(371, '74.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/74.jpg'),
(372, '75.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/75.jpg'),
(373, '76.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/76.jpg'),
(374, '77.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/77.jpg'),
(375, '78.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/78.jpg'),
(376, '79.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/79.jpg'),
(377, '8.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/8.jpg'),
(378, '80.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/80.jpg'),
(379, '81.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/81.jpg'),
(380, '82.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/82.jpg'),
(381, '83.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/83.jpg'),
(382, '84.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/84.jpg'),
(383, '85.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/85.jpg'),
(384, '86.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/86.jpg'),
(385, '87.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/87.jpg'),
(386, '88.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/88.jpg'),
(387, '89.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/89.jpg'),
(388, '9.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/9.jpg'),
(389, '90.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/90.jpg'),
(390, '91.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/91.jpg'),
(391, '92.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/92.jpg'),
(392, '93.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/93.jpg'),
(393, '94.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/94.jpg'),
(394, '95.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/95.jpg'),
(395, '96.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/96.jpg'),
(396, '97.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/97.jpg'),
(397, '98.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/98.jpg'),
(398, '99.jpg', '2023-09-24 14:12:07', 1, '../img/Product_cloth_dataset/jeans/99.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `member_account`
--

CREATE TABLE `member_account` (
  `Id` int(255) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `MD_Id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `member_account`
--

INSERT INTO `member_account` (`Id`, `Username`, `Password`, `MD_Id`) VALUES
(6, 'zen', 'Zen12345678', 12),
(7, 'admin', 'admin', 13),
(8, 'oatandnoey', 'Oat123456', 14),
(9, 'lisswkaa', 'Jittaphanu057', 15);

-- --------------------------------------------------------

--
-- Table structure for table `member_detail`
--

CREATE TABLE `member_detail` (
  `Id` int(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Surname` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `Address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `member_detail`
--

INSERT INTO `member_detail` (`Id`, `Name`, `Surname`, `Email`, `tel`, `Address`) VALUES
(12, 'ParunyuXD', 'Anakitbumrung', 's6404062663223@email.kmutnb.ac.th', '091231231', 'thai'),
(13, 'admin', 'adminnGGEZ', 's@gmail.com', '0222285151', 'aasc'),
(14, 'oat', 'supakrit', 's46149@debsirin.ac.th', '0894444444', ''),
(15, 'jittaphanu', 'koomdee', 'gartartzz@gmail.com', '0855561405', 'lolsadadsadw');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `OID` int(255) NOT NULL,
  `DATE` date NOT NULL,
  `TIME` time NOT NULL,
  `M_ID` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`OID`, `DATE`, `TIME`, `M_ID`) VALUES
(4, '2023-10-19', '15:16:02', 13),
(5, '2023-10-20', '14:07:13', 13),
(6, '2023-10-20', '14:13:15', 13),
(7, '2023-10-21', '23:55:55', 12);

-- --------------------------------------------------------

--
-- Table structure for table `orders_custom`
--

CREATE TABLE `orders_custom` (
  `C_id` int(11) NOT NULL,
  `M_Id` int(255) NOT NULL,
  `member_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders_custom`
--

INSERT INTO `orders_custom` (`C_id`, `M_Id`, `member_name`, `image_path`) VALUES
(49, 15, 'lisswkaa', '../img/custom/1697429714.png');

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

CREATE TABLE `order_detail` (
  `id` int(255) NOT NULL,
  `PID` int(255) NOT NULL,
  `OID` int(255) NOT NULL,
  `Amount` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_detail`
--

INSERT INTO `order_detail` (`id`, `PID`, `OID`, `Amount`) VALUES
(2, 1596, 4, 1),
(3, 1593, 5, 4),
(4, 1594, 7, 1);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `PID` int(20) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `detail` varchar(255) NOT NULL,
  `price` int(255) DEFAULT NULL,
  `amount` int(255) DEFAULT NULL,
  `CID` int(10) NOT NULL,
  `IMG_ID` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`PID`, `product_name`, `detail`, `price`, `amount`, `CID`, `IMG_ID`) VALUES
(1593, 't-shirt CLz7q', '', 209, 62, 1, 1),
(1594, 't-shirt rVkPi', '', 234, 89, 1, 2),
(1595, 't-shirt yPopZ', '', 901, 59, 1, 3),
(1596, 't-shirt P8sMr', '', 895, 48, 1, 4),
(1597, 't-shirt bIb7I', '', 263, 7, 1, 5),
(1598, 't-shirt 2UVvy', '', 116, 13, 1, 6),
(1599, 't-shirt QJlnO', '', 228, 59, 1, 7),
(1600, 't-shirt 1EpXH', '', 406, 36, 1, 8),
(1601, 't-shirt faHfF', '', 470, 69, 1, 9),
(1602, 't-shirt LB33S', '', 755, 26, 1, 10),
(1603, 't-shirt P1Jx5', '', 404, 55, 1, 11),
(1604, 't-shirt AITzm', '', 659, 36, 1, 12),
(1605, 't-shirt A2VnT', '', 874, 40, 1, 13),
(1606, 't-shirt q8tA5', '', 683, 50, 1, 14),
(1607, 't-shirt GhsMe', '', 358, 78, 1, 15),
(1608, 't-shirt gUMsf', '', 450, 50, 1, 16),
(1609, 't-shirt 3kLup', '', 232, 3, 1, 17),
(1610, 't-shirt t69D5', '', 419, 59, 1, 18),
(1611, 't-shirt cgcmZ', '', 548, 65, 1, 19),
(1612, 't-shirt 3PCRb', '', 870, 77, 1, 20),
(1613, 't-shirt DeCyR', '', 697, 94, 1, 21),
(1614, 't-shirt Jm3di', '', 754, 98, 1, 22),
(1615, 't-shirt d9dft', '', 209, 20, 1, 23),
(1616, 't-shirt O7AOX', '', 461, 89, 1, 24),
(1617, 't-shirt yE2H7', '', 144, 23, 1, 25),
(1618, 't-shirt S0cuK', '', 545, 13, 1, 26),
(1619, 't-shirt 8lt84', '', 769, 4, 1, 27),
(1620, 't-shirt zp4F3', '', 131, 79, 1, 28),
(1621, 't-shirt 1Eizm', '', 853, 62, 1, 29),
(1622, 't-shirt 9Nd7d', '', 726, 78, 1, 30),
(1623, 't-shirt POTtY', '', 768, 81, 1, 31),
(1624, 't-shirt o2yiP', '', 417, 47, 1, 32),
(1625, 't-shirt FTxMc', '', 987, 89, 1, 33),
(1626, 't-shirt fGG5T', '', 533, 18, 1, 34),
(1627, 't-shirt pE8wA', '', 293, 12, 1, 35),
(1628, 't-shirt qUXZm', '', 850, 90, 1, 36),
(1629, 't-shirt BSa3d', '', 647, 61, 1, 37),
(1630, 't-shirt pqtNN', '', 393, 14, 1, 38),
(1631, 't-shirt VwXhS', '', 982, 77, 1, 39),
(1632, 't-shirt Wdy5E', '', 910, 22, 1, 40),
(1633, 't-shirt gLzeB', '', 959, 63, 1, 41),
(1634, 't-shirt rT78G', '', 547, 45, 1, 42),
(1635, 't-shirt THpUF', '', 523, 22, 1, 43),
(1636, 't-shirt 62Ggy', '', 184, 69, 1, 44),
(1637, 't-shirt C1zPG', '', 103, 56, 1, 45),
(1638, 't-shirt cZCgA', '', 266, 7, 1, 46),
(1639, 't-shirt vFuK2', '', 741, 32, 1, 47),
(1640, 't-shirt w2Wqq', '', 176, 76, 1, 48),
(1641, 't-shirt UOzGr', '', 822, 46, 1, 49),
(1642, 't-shirt BL55X', '', 619, 51, 1, 50),
(1643, 't-shirt Hs9HE', '', 750, 73, 1, 51),
(1644, 't-shirt XvJv8', '', 337, 76, 1, 52),
(1645, 't-shirt AjVBP', '', 989, 98, 1, 53),
(1646, 't-shirt GBfHV', '', 246, 5, 1, 54),
(1647, 't-shirt 1PW0W', '', 677, 65, 1, 55),
(1648, 't-shirt llGFK', '', 220, 9, 1, 56),
(1649, 't-shirt uMdtY', '', 234, 45, 1, 57),
(1650, 't-shirt lCDcl', '', 192, 8, 1, 58),
(1651, 't-shirt 5SQJV', '', 226, 38, 1, 59),
(1652, 't-shirt QboUB', '', 187, 31, 1, 60),
(1653, 't-shirt W2BA1', '', 598, 80, 1, 61),
(1654, 't-shirt UQ1fC', '', 859, 33, 1, 62),
(1655, 't-shirt PH6km', '', 376, 96, 1, 63),
(1656, 't-shirt vAUPY', '', 958, 48, 1, 64),
(1657, 't-shirt BelBv', '', 809, 28, 1, 65),
(1658, 't-shirt HlshB', '', 817, 15, 1, 66),
(1659, 't-shirt xqWdu', '', 680, 86, 1, 67),
(1660, 't-shirt nGNQB', '', 410, 50, 1, 68),
(1661, 't-shirt VjWJf', '', 893, 0, 1, 69),
(1662, 't-shirt 1Fs6x', '', 426, 64, 1, 70),
(1663, 't-shirt 3Z07z', '', 684, 2, 1, 71),
(1664, 't-shirt MnwYK', '', 363, 1, 1, 72),
(1665, 't-shirt HLG11', '', 349, 92, 1, 73),
(1666, 't-shirt jwepW', '', 836, 61, 1, 74),
(1667, 't-shirt D4m7i', '', 320, 69, 1, 75),
(1668, 't-shirt eA8Rq', '', 156, 82, 1, 76),
(1669, 't-shirt O3IgS', '', 992, 92, 1, 77),
(1670, 't-shirt 1ZMUY', '', 142, 86, 1, 78),
(1671, 't-shirt BT9cl', '', 397, 97, 1, 79),
(1672, 't-shirt VpH6A', '', 502, 27, 1, 80),
(1673, 't-shirt dVZBi', '', 582, 28, 1, 81),
(1674, 't-shirt rCIrk', '', 265, 9, 1, 82),
(1675, 't-shirt XGocb', '', 165, 2, 1, 83),
(1676, 't-shirt OlkYI', '', 451, 92, 1, 84),
(1677, 't-shirt S0xsC', '', 547, 93, 1, 85),
(1678, 't-shirt mlNbF', '', 254, 32, 1, 86),
(1679, 't-shirt c73PD', '', 635, 69, 1, 87),
(1680, 't-shirt 1Ver7', '', 954, 89, 1, 88),
(1681, 't-shirt pmDXr', '', 357, 38, 1, 89),
(1682, 't-shirt BO8HP', '', 563, 56, 1, 90),
(1683, 't-shirt ph2wd', '', 392, 91, 1, 91),
(1684, 't-shirt E3iuZ', '', 806, 22, 1, 92),
(1685, 't-shirt GBjQy', '', 356, 96, 1, 93),
(1686, 't-shirt zE5kk', '', 733, 95, 1, 94),
(1687, 't-shirt nf5ls', '', 941, 90, 1, 95),
(1688, 't-shirt NQbFN', '', 821, 0, 1, 96),
(1689, 't-shirt OEWmB', '', 507, 91, 1, 97),
(1690, 't-shirt z14iN', '', 699, 71, 1, 98),
(1691, 't-shirt bFYry', '', 873, 0, 1, 99),
(1692, 't-shirt 64x9e', '', 135, 55, 1, 100),
(1693, 't-shirt V0OAz', '', 107, 43, 1, 101),
(1694, 't-shirt MYl6A', '', 529, 38, 1, 102),
(1695, 't-shirt 2lQFJ', '', 112, 75, 1, 103),
(1696, 't-shirt a63Tt', '', 509, 51, 1, 104),
(1697, 't-shirt M3Sdx', '', 701, 1, 1, 105),
(1698, 't-shirt ZuICS', '', 944, 35, 1, 106),
(1699, 't-shirt Cdc8S', '', 366, 96, 1, 107),
(1700, 't-shirt zDtX2', '', 653, 93, 1, 108),
(1701, 't-shirt cWWdS', '', 761, 4, 1, 109),
(1702, 't-shirt V1fqT', '', 527, 88, 1, 110),
(1703, 't-shirt 0gkP6', '', 143, 17, 1, 111),
(1704, 't-shirt iDpoh', '', 455, 26, 1, 112),
(1705, 't-shirt Axyec', '', 252, 33, 1, 113),
(1706, 't-shirt OrPkZ', '', 442, 68, 1, 114),
(1707, 't-shirt 9ICrz', '', 917, 77, 1, 115),
(1708, 't-shirt JDg3f', '', 574, 40, 1, 116),
(1709, 't-shirt q2t9y', '', 821, 52, 1, 117),
(1710, 't-shirt x1Tp3', '', 784, 90, 1, 118),
(1711, 't-shirt e7ff9', '', 413, 29, 1, 119),
(1712, 't-shirt L9lxw', '', 188, 34, 1, 120),
(1713, 't-shirt Cq1Oq', '', 514, 88, 1, 121),
(1714, 't-shirt UCvqD', '', 902, 68, 1, 122),
(1715, 't-shirt b35SB', '', 957, 60, 1, 123),
(1716, 't-shirt MxuVo', '', 362, 89, 1, 124),
(1717, 't-shirt Yhy39', '', 139, 90, 1, 125),
(1718, 't-shirt 3TD7i', '', 653, 91, 1, 126),
(1719, 't-shirt rFhfJ', '', 609, 2, 1, 127),
(1720, 't-shirt 28sie', '', 622, 92, 1, 128),
(1721, 't-shirt vysux', '', 940, 73, 1, 129),
(1722, 't-shirt clCwA', '', 578, 73, 1, 130),
(1723, 't-shirt MgFBu', '', 475, 34, 1, 131),
(1724, 't-shirt Uz6cH', '', 782, 3, 1, 132),
(1725, 't-shirt emK0G', '', 669, 96, 1, 133),
(1726, 't-shirt Ti2m9', '', 381, 96, 1, 134),
(1727, 't-shirt ESRuA', '', 904, 61, 1, 135),
(1728, 't-shirt ba4OJ', '', 441, 21, 1, 136),
(1729, 't-shirt v4Ixp', '', 700, 89, 1, 137),
(1730, 't-shirt v3T7B', '', 348, 72, 1, 138),
(1731, 't-shirt XjYzX', '', 306, 51, 1, 139),
(1732, 't-shirt DD8C1', '', 459, 54, 1, 140),
(1733, 't-shirt kHRS4', '', 722, 11, 1, 141),
(1734, 't-shirt iIXeC', '', 865, 11, 1, 142),
(1735, 't-shirt eZgfN', '', 436, 60, 1, 143),
(1736, 't-shirt FtOCA', '', 327, 81, 1, 144),
(1737, 't-shirt lpLFt', '', 901, 88, 1, 145),
(1738, 't-shirt vCVc2', '', 567, 51, 1, 146),
(1739, 't-shirt Eeg4i', '', 963, 24, 1, 147),
(1740, 't-shirt 3xIrb', '', 443, 77, 1, 148),
(1741, 't-shirt uX7mk', '', 120, 29, 1, 149),
(1742, 't-shirt ma3g1', '', 230, 39, 1, 150),
(1743, 't-shirt o2SXX', '', 415, 88, 1, 151),
(1744, 't-shirt p2VUJ', '', 856, 100, 1, 152),
(1745, 't-shirt QIM7Q', '', 685, 12, 1, 153),
(1746, 't-shirt SfAeU', '', 316, 99, 1, 154),
(1747, 't-shirt BUP8A', '', 513, 27, 1, 155),
(1748, 't-shirt 7YTFT', '', 292, 71, 1, 156),
(1749, 't-shirt yPqZl', '', 653, 22, 1, 157),
(1750, 't-shirt VyEyv', '', 998, 7, 1, 158),
(1751, 't-shirt QLUXJ', '', 617, 29, 1, 159),
(1752, 't-shirt YPOlm', '', 191, 75, 1, 160),
(1753, 't-shirt OHBZd', '', 816, 12, 1, 161),
(1754, 't-shirt MhNQY', '', 735, 92, 1, 162),
(1755, 't-shirt Dkl10', '', 600, 39, 1, 163),
(1756, 't-shirt LYaz0', '', 677, 62, 1, 164),
(1757, 't-shirt CyUwV', '', 304, 13, 1, 165),
(1758, 't-shirt PcVL1', '', 125, 64, 1, 166),
(1759, 't-shirt 2dwtG', '', 997, 94, 1, 167),
(1760, 't-shirt ggZQv', '', 894, 0, 1, 168),
(1761, 't-shirt Gj3u9', '', 207, 79, 1, 169),
(1762, 't-shirt hwBWr', '', 814, 83, 1, 170),
(1763, 't-shirt P7Vw8', '', 413, 60, 1, 171),
(1764, 't-shirt Dep8v', '', 494, 7, 1, 172),
(1765, 't-shirt yV9Mg', '', 485, 13, 1, 173),
(1766, 't-shirt 96hoI', '', 992, 4, 1, 174),
(1767, 't-shirt YuHza', '', 429, 77, 1, 175),
(1768, 't-shirt Aixw4', '', 848, 74, 1, 176),
(1769, 't-shirt Gx4qq', '', 462, 84, 1, 177),
(1770, 't-shirt lOcWG', '', 842, 6, 1, 178),
(1771, 't-shirt 3BMO4', '', 695, 83, 1, 179),
(1772, 't-shirt DrITR', '', 254, 18, 1, 180),
(1773, 't-shirt qgN2z', '', 453, 12, 1, 181),
(1774, 't-shirt 5smFO', '', 405, 31, 1, 182),
(1775, 't-shirt w7z8i', '', 381, 43, 1, 183),
(1776, 't-shirt UguYC', '', 580, 72, 1, 184),
(1777, 't-shirt MArFN', '', 722, 8, 1, 185),
(1778, 't-shirt 2ISS5', '', 351, 83, 1, 186),
(1779, 't-shirt f2KoX', '', 241, 50, 1, 187),
(1780, 't-shirt F5tY5', '', 611, 58, 1, 188),
(1781, 't-shirt OlaHy', '', 817, 82, 1, 189),
(1782, 't-shirt 5DOZG', '', 109, 90, 1, 190),
(1783, 't-shirt pd8a7', '', 321, 62, 1, 191),
(1784, 't-shirt PvvnS', '', 315, 45, 1, 192),
(1785, 't-shirt 7iarv', '', 397, 87, 1, 193),
(1786, 't-shirt 4RWYs', '', 501, 13, 1, 194),
(1787, 't-shirt 4zKby', '', 153, 4, 1, 195),
(1788, 't-shirt D8ssh', '', 798, 67, 1, 196),
(1789, 't-shirt QDBD6', '', 197, 18, 1, 197),
(1790, 't-shirt kwQqi', '', 713, 73, 1, 198),
(1791, 't-shirt kAdDX', '', 676, 18, 1, 199),
(1792, 'jeans tOe5T', '', 274, 82, 2, 200),
(1793, 'jeans xAPfL', '', 875, 76, 2, 201),
(1794, 'jeans oM1fM', '', 682, 53, 2, 202),
(1795, 'jeans AORvh', '', 164, 96, 2, 203),
(1796, 'jeans eWARt', '', 687, 52, 2, 204),
(1797, 'jeans mYYbB', '', 898, 52, 2, 205),
(1798, 'jeans Z77v0', '', 423, 31, 2, 206),
(1799, 'jeans rThIs', '', 821, 4, 2, 207),
(1800, 'jeans c6IoL', '', 208, 99, 2, 208),
(1801, 'jeans q8fi2', '', 410, 20, 2, 209),
(1802, 'jeans 5p8cT', '', 177, 85, 2, 210),
(1803, 'jeans NNFMa', '', 479, 23, 2, 211),
(1804, 'jeans v9KxX', '', 866, 24, 2, 212),
(1805, 'jeans hEACh', '', 279, 52, 2, 213),
(1806, 'jeans Xxj7r', '', 529, 45, 2, 214),
(1807, 'jeans 4GZVf', '', 987, 69, 2, 215),
(1808, 'jeans 069yl', '', 824, 20, 2, 216),
(1809, 'jeans hJdst', '', 345, 32, 2, 217),
(1810, 'jeans 3gtLN', '', 380, 4, 2, 218),
(1811, 'jeans 4EUpj', '', 630, 99, 2, 219),
(1812, 'jeans 0gGs3', '', 899, 52, 2, 220),
(1813, 'jeans EGbDF', '', 724, 67, 2, 221),
(1814, 'jeans HJI07', '', 297, 8, 2, 222),
(1815, 'jeans yYMUo', '', 242, 64, 2, 223),
(1816, 'jeans VvCLK', '', 201, 85, 2, 224),
(1817, 'jeans 609yb', '', 556, 78, 2, 225),
(1818, 'jeans YRXXy', '', 279, 50, 2, 226),
(1819, 'jeans TVb44', '', 823, 99, 2, 227),
(1820, 'jeans WW9U7', '', 882, 73, 2, 228),
(1821, 'jeans BIA1g', '', 467, 9, 2, 229),
(1822, 'jeans bxZhW', '', 826, 70, 2, 230),
(1823, 'jeans Gnugw', '', 757, 37, 2, 231),
(1824, 'jeans 7CTTU', '', 766, 86, 2, 232),
(1825, 'jeans 50o68', '', 465, 25, 2, 233),
(1826, 'jeans SCwqj', '', 527, 9, 2, 234),
(1827, 'jeans 5gPNW', '', 421, 27, 2, 235),
(1828, 'jeans OhQX5', '', 146, 19, 2, 236),
(1829, 'jeans HFlpv', '', 846, 85, 2, 237),
(1830, 'jeans QbNsy', '', 863, 16, 2, 238),
(1831, 'jeans RES1U', '', 317, 8, 2, 239),
(1832, 'jeans 1XIDr', '', 179, 82, 2, 240),
(1833, 'jeans muxVY', '', 922, 99, 2, 241),
(1834, 'jeans HTyaK', '', 695, 16, 2, 242),
(1835, 'jeans 0vKVE', '', 795, 82, 2, 243),
(1836, 'jeans PWuqC', '', 170, 16, 2, 244),
(1837, 'jeans wtlVO', '', 784, 81, 2, 245),
(1838, 'jeans 2LORp', '', 438, 65, 2, 246),
(1839, 'jeans yYG5G', '', 500, 7, 2, 247),
(1840, 'jeans UIsbN', '', 632, 36, 2, 248),
(1841, 'jeans E92Em', '', 837, 37, 2, 249),
(1842, 'jeans jDELu', '', 572, 2, 2, 250),
(1843, 'jeans hHBlO', '', 530, 30, 2, 251),
(1844, 'jeans EGtZv', '', 885, 82, 2, 252),
(1845, 'jeans UzJz3', '', 501, 96, 2, 253),
(1846, 'jeans ZWJcf', '', 463, 52, 2, 254),
(1847, 'jeans nvPSL', '', 329, 50, 2, 255),
(1848, 'jeans yX1FP', '', 460, 99, 2, 256),
(1849, 'jeans 2M5cq', '', 304, 14, 2, 257),
(1850, 'jeans slOxW', '', 559, 57, 2, 258),
(1851, 'jeans KBdzv', '', 575, 59, 2, 259),
(1852, 'jeans BygFV', '', 258, 56, 2, 260),
(1853, 'jeans WRMLc', '', 899, 85, 2, 261),
(1854, 'jeans 29dep', '', 216, 73, 2, 262),
(1855, 'jeans Lg6NB', '', 106, 90, 2, 263),
(1856, 'jeans Wb3Ko', '', 534, 10, 2, 264),
(1857, 'jeans TlvuE', '', 484, 89, 2, 265),
(1858, 'jeans SgE6r', '', 769, 30, 2, 266),
(1859, 'jeans 4QtTo', '', 666, 6, 2, 267),
(1860, 'jeans DVzNx', '', 768, 80, 2, 268),
(1861, 'jeans lHWBw', '', 234, 64, 2, 269),
(1862, 'jeans AvRjH', '', 317, 6, 2, 270),
(1863, 'jeans U3bww', '', 487, 93, 2, 271),
(1864, 'jeans xahE1', '', 215, 46, 2, 272),
(1865, 'jeans Oh298', '', 407, 52, 2, 273),
(1866, 'jeans l2SUa', '', 980, 84, 2, 274),
(1867, 'jeans dRelT', '', 990, 92, 2, 275),
(1868, 'jeans wah5r', '', 670, 5, 2, 276),
(1869, 'jeans 0E8ZO', '', 297, 20, 2, 277),
(1870, 'jeans 6pljl', '', 251, 76, 2, 278),
(1871, 'jeans UT85S', '', 508, 55, 2, 279),
(1872, 'jeans 82kw8', '', 379, 70, 2, 280),
(1873, 'jeans vlDvD', '', 476, 2, 2, 281),
(1874, 'jeans E6F88', '', 303, 12, 2, 282),
(1875, 'jeans FnMks', '', 670, 68, 2, 283),
(1876, 'jeans 9coU0', '', 322, 42, 2, 284),
(1877, 'jeans VSRTa', '', 401, 49, 2, 285),
(1878, 'jeans RziUW', '', 689, 33, 2, 286),
(1879, 'jeans G8CvB', '', 429, 18, 2, 287),
(1880, 'jeans QNS5K', '', 553, 63, 2, 288),
(1881, 'jeans XhVyY', '', 514, 7, 2, 289),
(1882, 'jeans OSuR7', '', 499, 68, 2, 290),
(1883, 'jeans h9QaB', '', 390, 5, 2, 291),
(1884, 'jeans 2URhS', '', 431, 69, 2, 292),
(1885, 'jeans YCZDw', '', 872, 75, 2, 293),
(1886, 'jeans Y3SOC', '', 953, 19, 2, 294),
(1887, 'jeans SuZFT', '', 426, 26, 2, 295),
(1888, 'jeans D7afK', '', 719, 99, 2, 296),
(1889, 'jeans T4YX3', '', 933, 76, 2, 297),
(1890, 'jeans OA7Tw', '', 602, 30, 2, 298),
(1891, 'jeans AE0Vh', '', 598, 65, 2, 299),
(1892, 'jeans g6fRz', '', 160, 10, 2, 300),
(1893, 'jeans XI6qU', '', 754, 88, 2, 301),
(1894, 'jeans pHjnX', '', 182, 25, 2, 302),
(1895, 'jeans CAxPM', '', 729, 78, 2, 303),
(1896, 'jeans OE9S2', '', 713, 38, 2, 304),
(1897, 'jeans PfFJG', '', 610, 59, 2, 305),
(1898, 'jeans k3kfE', '', 636, 9, 2, 306),
(1899, 'jeans uQOzU', '', 731, 3, 2, 307),
(1900, 'jeans ZfqEY', '', 975, 7, 2, 308),
(1901, 'jeans LEUl6', '', 255, 24, 2, 309),
(1902, 'jeans OjZNY', '', 778, 41, 2, 310),
(1903, 'jeans vzKfv', '', 658, 71, 2, 311),
(1904, 'jeans cutFM', '', 174, 78, 2, 312),
(1905, 'jeans Sl5Qw', '', 216, 21, 2, 313),
(1906, 'jeans FGQzZ', '', 514, 82, 2, 314),
(1907, 'jeans cmTHo', '', 434, 1, 2, 315),
(1908, 'jeans AsZwV', '', 413, 59, 2, 316),
(1909, 'jeans lkwzE', '', 787, 13, 2, 317),
(1910, 'jeans mCfZr', '', 445, 61, 2, 318),
(1911, 'jeans 4bOKS', '', 430, 42, 2, 319),
(1912, 'jeans 0SKG5', '', 587, 23, 2, 320),
(1913, 'jeans TS1X7', '', 178, 47, 2, 321),
(1914, 'jeans MNlcD', '', 827, 32, 2, 322),
(1915, 'jeans BlLow', '', 157, 33, 2, 323),
(1916, 'jeans X4Rvf', '', 769, 16, 2, 324),
(1917, 'jeans jAZcW', '', 339, 87, 2, 325),
(1918, 'jeans e1lhi', '', 950, 68, 2, 326),
(1919, 'jeans v39xB', '', 784, 82, 2, 327),
(1920, 'jeans 7duPd', '', 430, 11, 2, 328),
(1921, 'jeans oQQmC', '', 250, 51, 2, 329),
(1922, 'jeans xzFhG', '', 408, 16, 2, 330),
(1923, 'jeans qW4Lu', '', 121, 80, 2, 331),
(1924, 'jeans BcwMV', '', 693, 10, 2, 332),
(1925, 'jeans 8uReF', '', 294, 16, 2, 333),
(1926, 'jeans IOPNb', '', 468, 39, 2, 334),
(1927, 'jeans jhR2H', '', 678, 6, 2, 335),
(1928, 'jeans 5gWCv', '', 636, 64, 2, 336),
(1929, 'jeans N70uD', '', 584, 51, 2, 337),
(1930, 'jeans 8PJQF', '', 349, 38, 2, 338),
(1931, 'jeans oC5AL', '', 894, 89, 2, 339),
(1932, 'jeans nGz3b', '', 311, 5, 2, 340),
(1933, 'jeans J0LgW', '', 273, 71, 2, 341),
(1934, 'jeans zecO4', '', 529, 56, 2, 342),
(1935, 'jeans v3nJ4', '', 720, 14, 2, 343),
(1936, 'jeans yRV2F', '', 908, 47, 2, 344),
(1937, 'jeans K1QW3', '', 937, 11, 2, 345),
(1938, 'jeans NciLU', '', 248, 76, 2, 346),
(1939, 'jeans jTEyz', '', 662, 95, 2, 347),
(1940, 'jeans 0oLq0', '', 135, 83, 2, 348),
(1941, 'jeans HNS0Y', '', 264, 70, 2, 349),
(1942, 'jeans SAuOo', '', 505, 49, 2, 350),
(1943, 'jeans KO7eW', '', 548, 30, 2, 351),
(1944, 'jeans nIE0l', '', 493, 15, 2, 352),
(1945, 'jeans tMldO', '', 177, 29, 2, 353),
(1946, 'jeans N1Vx3', '', 888, 25, 2, 354),
(1947, 'jeans Lfapx', '', 408, 83, 2, 355),
(1948, 'jeans Q0jfd', '', 246, 54, 2, 356),
(1949, 'jeans B6rLN', '', 775, 42, 2, 357),
(1950, 'jeans Z8GKN', '', 277, 14, 2, 358),
(1951, 'jeans GUqKJ', '', 469, 69, 2, 359),
(1952, 'jeans PESCw', '', 130, 12, 2, 360),
(1953, 'jeans bNY7V', '', 443, 35, 2, 361),
(1954, 'jeans mAZp6', '', 264, 92, 2, 362),
(1955, 'jeans kxnuY', '', 191, 86, 2, 363),
(1956, 'jeans YdoBd', '', 402, 25, 2, 364),
(1957, 'jeans vc2nJ', '', 777, 32, 2, 365),
(1958, 'jeans oqres', '', 655, 92, 2, 366),
(1959, 'jeans Yk9GJ', '', 805, 52, 2, 367),
(1960, 'jeans rd5eP', '', 859, 88, 2, 368),
(1961, 'jeans dEx4T', '', 329, 86, 2, 369),
(1962, 'jeans LIlGq', '', 247, 53, 2, 370),
(1963, 'jeans btGXJ', '', 516, 62, 2, 371),
(1964, 'jeans YRsCo', '', 740, 51, 2, 372),
(1965, 'jeans soJa4', '', 314, 91, 2, 373),
(1966, 'jeans PXRHL', '', 541, 86, 2, 374),
(1967, 'jeans iSK6j', '', 166, 48, 2, 375),
(1968, 'jeans OdiPz', '', 419, 49, 2, 376),
(1969, 'jeans 01Q4o', '', 364, 38, 2, 377),
(1970, 'jeans TIlLo', '', 630, 100, 2, 378),
(1971, 'jeans M7czr', '', 230, 83, 2, 379),
(1972, 'jeans fhGxO', '', 467, 1, 2, 380),
(1973, 'jeans qP56y', '', 567, 77, 2, 381),
(1974, 'jeans MK8nF', '', 255, 25, 2, 382),
(1975, 'jeans gCg8a', '', 715, 28, 2, 383),
(1976, 'jeans d3Mzs', '', 667, 37, 2, 384),
(1977, 'jeans AEm2P', '', 618, 72, 2, 385),
(1978, 'jeans 7n9mI', '', 930, 91, 2, 386),
(1979, 'jeans DDKde', '', 362, 95, 2, 387),
(1980, 'jeans YBPCn', '', 319, 37, 2, 388),
(1981, 'jeans VeHQn', '', 600, 77, 2, 389),
(1982, 'jeans xVZuG', '', 184, 83, 2, 390),
(1983, 'jeans 1lsyX', '', 989, 65, 2, 391),
(1984, 'jeans oHivg', '', 714, 61, 2, 392),
(1985, 'jeans q5N87', '', 399, 97, 2, 393),
(1986, 'jeans fpWVs', '', 633, 0, 2, 394),
(1987, 'jeans sDQPI', '', 299, 21, 2, 395),
(1988, 'jeans GBart', '', 595, 30, 2, 396),
(1989, 'jeans hCOHc', '', 433, 87, 2, 397),
(1990, 'jeans 8t0om', '', 382, 55, 2, 398);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`CID`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`IMG_ID`);

--
-- Indexes for table `member_account`
--
ALTER TABLE `member_account`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `ID` (`MD_Id`);

--
-- Indexes for table `member_detail`
--
ALTER TABLE `member_detail`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`OID`);

--
-- Indexes for table `orders_custom`
--
ALTER TABLE `orders_custom`
  ADD PRIMARY KEY (`C_id`),
  ADD KEY `M_Id` (`M_Id`) USING BTREE;

--
-- Indexes for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`PID`),
  ADD KEY `CID` (`CID`),
  ADD KEY `IMG_ID` (`IMG_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `CID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `IMG_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1797;

--
-- AUTO_INCREMENT for table `member_account`
--
ALTER TABLE `member_account`
  MODIFY `Id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `member_detail`
--
ALTER TABLE `member_detail`
  MODIFY `Id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `OID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `orders_custom`
--
ALTER TABLE `orders_custom`
  MODIFY `C_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `PID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1991;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `member_account`
--
ALTER TABLE `member_account`
  ADD CONSTRAINT `member_account_ibfk_1` FOREIGN KEY (`MD_Id`) REFERENCES `member_detail` (`Id`);

--
-- Constraints for table `orders_custom`
--
ALTER TABLE `orders_custom`
  ADD CONSTRAINT `orders_custom_ibfk_1` FOREIGN KEY (`M_Id`) REFERENCES `member_detail` (`Id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `CID` FOREIGN KEY (`CID`) REFERENCES `category` (`CID`),
  ADD CONSTRAINT `IMG_ID` FOREIGN KEY (`IMG_ID`) REFERENCES `images` (`IMG_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
