<?php

namespace Core\Http;

interface Middleware
{
    public function handle(Request $request): void;
}
