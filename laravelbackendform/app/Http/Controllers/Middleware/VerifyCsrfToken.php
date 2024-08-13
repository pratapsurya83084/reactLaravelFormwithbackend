
<?php

// namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Log;

class CustomCsrfToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function handle(Request $request, Closure $next)
    {
        // Get the CSRF token from the request headers
        $token = $request->header('X-CSRF-TOKEN');

        // Get the CSRF token from the session
        $sessionToken = Session::token();

        // Check if the token is present and valid
        if (!$token || $token !== $sessionToken) {
            // Log the invalid token attempt (optional)
            Log::warning('Invalid CSRF token attempt.', ['token' => $token]);

            // Return an unauthorized response
            return response()->json(['error' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }

        // Continue processing the request if the token is valid
        return $next($request);
    }
}

