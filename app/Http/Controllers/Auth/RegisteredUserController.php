<?php

namespace App\Http\Controllers\Auth;

use App\Enums\USER_ROLES;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create ()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store (Request $request)
    {
        $request->validate([
                               'name'        => 'required|string|max:255',
                               'email'       => 'required|string|email|max:255|unique:users',
                               'password'    => ['required', 'confirmed', Rules\Password::defaults()],
                               'blood_group' => [
                                   'required', Rule::in([
                                                            'A+',
                                                            'A-',
                                                            'B-',
                                                            'O+',
                                                            'O-',
                                                            'AB+',
                                                            'AB-',
                                                            'B+',
                                                        ]),
                               ],
                           ]);

        $user = User::create([
                                 'name'        => $request->name,
                                 'email'       => $request->email,
                                 'password'    => Hash::make($request->password),
                                 'blood_group' => $request->blood_group,
                                 'role'        => USER_ROLES::DONOR->value,
                             ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
