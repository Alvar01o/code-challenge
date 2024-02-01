<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $toArray = parent::toArray($request);
        $toArray['hasDiscount'] = false;
        if ($this->isPalindrome($request->search)) {
            //add discount
            $toArray['price'] = $toArray['price'] * 0.5 ;
            $toArray['hasDiscount'] = true;
        }
        return $toArray;
    }
    private function isPalindrome($str) {
        if (empty($str)) {
            return false;
        }
        $str = strtolower(str_replace(' ', '', $str)); // Convert to lowercase and remove spaces
        $reverse = strrev($str); // Reverse the string
        return $str === $reverse; // Check if the original string is equal to the reversed string
    }
}
