<?php
    include "server.php";

    $genre = isset($_GET["fGenre"]) ? $_GET["fGenre"] : null;

        $filters = [
            "genre" => $genre
        ];
        

        function filterData($rawData, $filters) {
            $filteredData = [];
            foreach($rawData as $singleData){
                foreach ($filters as $filterKey => $filterValue) {
                    if ($filterValue) {
                        $result = stristr($singleData[$filterKey], $filterValue);
                        if($result) {
                            $filteredData[] = $singleData ;
                        }
                    }
                }
            }
            return $filteredData;
        }

        

        header("Content-Type: application/json");
        echo json_encode(filterData($discs, $filters));
?>