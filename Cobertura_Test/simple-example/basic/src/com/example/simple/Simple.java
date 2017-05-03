/**
 * Cobertura - http://cobertura.sourceforge.net/
 *
 * Copyright (C) 2003 jcoverage ltd.
 * Copyright (C) 2005 Mark Doliner <thekingant@users.sourceforge.net>
 *
 * Cobertura is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published
 * by the Free Software Foundation; either version 2 of the License,
 * or (at your option) any later version.
 *
 * Cobertura is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Cobertura; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307
 * USA
 */

package com.example.simple;

import java.util.Collection;
import java.util.List;
import java.util.Iterator;
import java.util.stream.Collectors;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;

public class Simple
{

	// private static final Logger logger = LoggerFactory.getLogger(Simple.class);

	public int square(int x)
	{
		int result = x * x;
		return result;
	}

	public int f(int x)
	{
		if( x > 0){
			return 1;
		}else{
			return 0;
		}
	}

	public int sum(Collection c)
	{
		int result = 0;

		for (Iterator i = c.iterator(); i.hasNext();)
		{
			int value = ((Number)i.next()).intValue();

			result += value;
		}

		return result;
	}

	public List<Integer> filterNeg(List<Integer> al){
		return al.stream().map( i -> i*i).distinct().collect(Collectors.toList());
	}
}
