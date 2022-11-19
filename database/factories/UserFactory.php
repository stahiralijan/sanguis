<?php

namespace Database\Factories;

use App\Enums\USER_ROLES;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition ()
    {
        return [
            'name'              => fake()->name(),
            'email'             => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password'          => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token'    => Str::random(10),
            'blood_group'       => collect([
                                               'A+',
                                               'A-',
                                               'B-',
                                               'O+',
                                               'O-',
                                               'AB+',
                                               'AB-',
                                               'B+',
                                           ])->random(1)->first(),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified ()
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => NULL,
        ]);
    }

    public function donor ()
    {
        return $this->state(function (array $attributes)
        {
            return [
                'role' => USER_ROLES::DONOR->value,
            ];
        });
    }

    public function admin ()
    {
        return $this->state(function (array $attributes)
        {
            return [
                'email' => 'admin@sanguis.com',
                'role'  => USER_ROLES::ADMIN->value,
            ];
        });
    }
}
